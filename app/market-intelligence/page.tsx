"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { GrapeIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { getCookie } from "@/lib/utils";

interface Farm {
  id: number;
  total_yield_range: string;
  crops: string;
  preferred_bid: string;
}

interface Bid {
  aggregated_season: number;
  status: string;
}

const MarketAccess = () => {
  const [aggregatedFarms, setAggregatedFarms] = useState<Farm[]>([]);
  const [userBids, setUserBids] = useState<Bid[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedFarm, setSelectedFarm] = useState<Farm | null>(null);
  const [selectedBidStatus, setSelectedBidStatus] = useState<string | null>(
    null
  );
  const router = useRouter();

  const fetchAggregatedFarms = async () => {
    try {
      const response = await fetch("http://178.128.240.96/aggregated-seasons/");
      const data = await response.json();
      if (data.results) {
        setAggregatedFarms(data.results);
      } else {
        console.error("No results found in the response");
      }
    } catch (error) {
      console.error("Error fetching aggregated farms:", error);
    }
  };

  const fetchUserBids = async () => {
    const token = getCookie("access_token");
    if (!token) return;
    try {
      const userId = localStorage.getItem("user_id");
      const response = await fetch(
        `http://178.128.240.96/market/bids/?user_id=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      if (data.results) {
        setUserBids(data.results);
      } else {
        console.error("No bids found in the response");
      }
    } catch (error) {
      console.error("Error fetching user bids:", error);
    }
  };

  useEffect(() => {
    const token = getCookie("access_token");
    setIsAuthenticated(!!token);

    fetchAggregatedFarms();
    fetchUserBids();
  }, []);

  const handleBuyProduce = async (farmId: number, preferredAmount: string) => {
    const token = getCookie("access_token");
    if (!isAuthenticated || !token) {
      alert("You need to be logged in to place a bid.");
      return;
    }

    const userId = localStorage.getItem("user_id");
    const url = `http://178.128.240.96/market/bids/${userId}/create/`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          aggregated_season: farmId,
          preferred_amount: preferredAmount,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create bid");
      }

      const data = await response.json();
      console.log("Bid created successfully:", data);

      fetchUserBids();
    } catch (error) {
      console.error("Error creating bid:", error);
    }
  };

  const handleViewOfferStatus = (farmId: number) => {
    const bid = userBids.find((bid) => bid.aggregated_season === farmId);
    if (bid) {
      setSelectedBidStatus(bid.status);
      setSelectedFarm(
        aggregatedFarms.find((farm) => farm.id === farmId) || null
      );
    }
  };

  const getCropImage = (crop: string) => {
    switch (crop.toLowerCase()) {
      case "maize":
        return "/images/maize.webp";
      case "cassava":
        return "/images/cassava.webp";
      default:
        return "/images/cassava.webp";
    }
  };

  return (
    <div>
      <div className="min-h-[35vh] bg-[url('/images/banner.jpg')] bg-bottom bg-cover text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl">Your Market Access</h1>
        <div className="flex w-full mt-4 max-w-sm items-center space-x-2">
          <Input
            type="text"
            placeholder="Search farm produce"
            className="text-black"
          />
          <Button type="submit">Search</Button>
        </div>
      </div>
      <div className="max-w-[1040px] mx-auto py-8 grid grid-cols-3">
        {aggregatedFarms.length > 0 ? (
          aggregatedFarms.map((farm) => {
            const { id, total_yield_range, crops, preferred_bid } = farm;
            const hasBid = userBids.some((bid) => bid.aggregated_season === id);
            return (
              <Card key={id} className="w-[20rem] mb-4">
                <CardHeader>
                  <div className="h-44 overflow-hidden">
                    <Image
                      src={getCropImage(crops)}
                      className="w-full h-full rounded-md"
                      alt={crops}
                      width={200}
                      height={200}
                    />
                  </div>
                  <CardTitle>Crop: {crops}</CardTitle>
                </CardHeader>
                <CardContent>
                  <span className="text-gray-600">
                    Yield Range: {total_yield_range}
                  </span>
                  <br />
                  <span className="text-gray-600">
                    Preferred Bid: ${parseFloat(preferred_bid).toFixed(2)}
                  </span>
                </CardContent>
                <CardFooter className="flex flex-col justify-between gap-2">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        className="w-full text-white group p-0 bg-primary"
                        onClick={() => handleBuyProduce(id, preferred_bid)}
                      >
                        <GrapeIcon className="text-white w-4 h-4 mr-2" />
                        Buy Produce
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Your bid has been received
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          Our farms have been notified and will notify you
                          confirmation.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Okay</AlertDialogCancel>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                  {/* View Offer Status Button */}
                  {hasBid && (
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          className="w-full border border-gray-400 bg-transparent text-gray-600 hover:bg-transparent"
                          onClick={() => handleViewOfferStatus(id)}
                        >
                          View Offer Status
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Offer Status for {crops}
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            {selectedFarm && (
                              <>
                                <div>
                                  <strong>Crop:</strong> {selectedFarm.crops}
                                </div>
                                <div>
                                  <strong>Preferred Bid:</strong> $
                                  {parseFloat(
                                    selectedFarm.preferred_bid
                                  ).toFixed(2)}
                                </div>
                                <div>
                                  <strong>Bid Status:</strong>{" "}
                                  {selectedBidStatus}
                                </div>
                              </>
                            )}
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Okay</AlertDialogCancel>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  )}
                </CardFooter>
              </Card>
            );
          })
        ) : (
          <Skeleton className="w-[22rem] rounded-lg h-[24rem]" />
        )}
      </div>
    </div>
  );
};

export default MarketAccess;
