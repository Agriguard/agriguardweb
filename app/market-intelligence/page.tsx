"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
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
import React from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { GrapeIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { getCookie } from "@/lib/utils";

const MarketAccess = () => {
  const [aggregatedFarms, setAggregatedFarms] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchAggregatedFarms = async () => {
      try {
        const response = await fetch(
          "http://178.128.240.96/aggregated-seasons/"
        );
        const data = await response.json();
        console.log(data);
        if (data.results) {
          setAggregatedFarms(data.results);
        } else {
          console.error("No results found in the response");
        }
      } catch (error) {
        console.error("Error fetching aggregated farms:", error);
      }
    };

    const token = getCookie("access_token");
    setIsAuthenticated(!!token);

    fetchAggregatedFarms();
  }, []);

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
            return (
              <Card key={id} className="w-[20rem] mb-4">
                <CardHeader>
                  <Image
                    src="/images/cassava.webp"
                    className="w-auto h-auto rounded-md"
                    alt={crops}
                    width={200}
                    height={200}
                  />
                  <CardTitle>Crop: {crops}</CardTitle>
                  <CardDescription></CardDescription>
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
                      <Button className="w-full text-white group p-0 mb-3 bg-primary">
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
