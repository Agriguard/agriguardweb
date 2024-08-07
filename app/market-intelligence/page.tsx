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
import InsightsCloud from "@/components/pricing-cloud";

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
      const response = await fetch("/api/fetchAggregatedFarms", {
        method: "GET",
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      });
      const data = await response.json();
      console.log(data.results);
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
    try {
      const userId = localStorage.getItem("user_id");
      const response = await fetch(`/api/fetchUserBids?user_id=${userId}`, {
        headers: {
          id: userId || "",
        },
      });
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
    try {
      const userId = localStorage.getItem("user_id");
      if (!userId) {
        throw new Error("User ID not found in localStorage");
      }

      console.log(userId);
      const response = await fetch("/api/createBid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ farmId, preferredAmount, userId }),
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
      case "pineapple":
        return "/images/pineapple.png";
      case "rice":
        return "/images/rice.png";
      case "soyabean":
        return "/images/soyabean.png";
      default:
        return "/images/crop.png";
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
      <InsightsCloud />
      <div className="max-w-[1040px] mx-auto py-8 grid grid-cols-2 lg:grid-cols-3 ps-2 lg:ps-0">
        {aggregatedFarms.length > 0 ? (
          aggregatedFarms.map((farm) => {
            const { id, total_yield_range, crops, preferred_bid } = farm;
            const hasBid = userBids.some((bid) => bid.aggregated_season === id);
            return (
              <Card key={id} className=" h-72 lg:h-full lg:w-[20rem] mb-4">
                <CardHeader>
                  <div className="h-24 lg:h-44 overflow-hidden">
                    <Image
                      src={getCropImage(crops)}
                      className="w-full h-full rounded-t-md"
                      alt={crops}
                      width={200}
                      height={200}
                    />
                  </div>
                  <CardTitle className="text-sm lg:text-2xl">
                    Crop: {crops}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <span className="text-gray-600 text-xs lg:text-base">
                    Yield Range:
                    <br /> {total_yield_range}
                  </span>
                  <br />
                  <span className="text-gray-600 text-xs lg:text-base">
                    Price: ${parseFloat(preferred_bid).toFixed(2)}
                  </span>
                </CardContent>
                <CardFooter className="flex flex-col justify-between gap-2 ">
                  {isAuthenticated ? (
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
                            The agent has been notified. Check offer status for
                            confirmation.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Okay</AlertDialogCancel>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  ) : (
                    <Button
                      className="lg:w-full text-white group lg:p-0 bg-primary text-xs lg:text-base h-8 lg:h-11 rounded-full me-auto ms-2 lg:ms-0 w-fit"
                      onClick={() => router.push("/auth/login")}
                    >
                      <GrapeIcon className="text-white w-4 h-4 mr-2 hidden lg:flex" />
                      Login to Buy Produce
                    </Button>
                  )}
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
