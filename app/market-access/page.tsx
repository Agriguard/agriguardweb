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
  AlertDialogAction,
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

interface Farm {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  estimated_yield: string;
  price: string;
  crops: string;
  crop_varieties: string;
}

const parseEstimatedHarvestDates = (
  estimatedYield: string
): [Date, Date] | null => {
  const match = estimatedYield.match(
    /'estimated_harvest_dates': '(\d{4}-\d{2}-\d{2}) to (\d{4}-\d{2}-\d{2})'/
  );
  if (match) {
    const start = new Date(match[1]);
    const end = new Date(match[2]);
    return [start, end];
  }
  return null;
};

const filterFarms = (farms: Farm[], rangeInDays: number = 21): Farm[] => {
  const today = new Date();
  const rangeEnd = new Date();
  rangeEnd.setDate(today.getDate() + rangeInDays);

  return farms.filter((farm) => {
    const harvestDates = parseEstimatedHarvestDates(farm.estimated_yield);
    if (!harvestDates) return false;
    const [startDate, endDate] = harvestDates;
    return startDate <= rangeEnd && endDate >= today;
  });
};

const formatHarvestDate = (startDate: Date, endDate: Date): string => {
  const today = new Date();
  const weeksDifference = (date: Date) =>
    Math.round((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24 * 7));

  if (startDate > today) {
    const weeks = weeksDifference(startDate);
    return `In ${weeks} weeks`;
  } else if (endDate < today) {
    const weeks = -weeksDifference(endDate);
    return `${weeks} weeks ago`;
  } else {
    return "Currently harvesting";
  }
};

export default function MarketAccess() {
  const [farms, setFarms] = useState<Farm[]>([]);

  useEffect(() => {
    const fetchFarms = async () => {
      try {
        const response = await fetch("http://178.128.240.96/seasons/");
        const data = await response.json();
        console.log(data);
        const filteredFarms = filterFarms(data.results);
        setFarms(filteredFarms);
      } catch (error) {
        console.error("Error fetching farms:", error);
      }
    };

    fetchFarms();
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
      <div className="max-w-[1040px] mx-auto py-8 hidden">
        {farms.map((farm) => {
          const harvestDates = parseEstimatedHarvestDates(farm.estimated_yield);
          const harvestStatus = harvestDates
            ? formatHarvestDate(harvestDates[0], harvestDates[1])
            : "Unknown";

          return (
            <Card key={farm.id} className="w-[350px] mb-4">
              <CardHeader>
                <Image
                  src="/images/cassava.webp"
                  className="w-auto h-auto rounded-md"
                  alt="cassava"
                  width={200}
                  height={200}
                />
                <CardTitle>Farm ID: {farm.name}</CardTitle>
                <CardDescription>Location: Aburi</CardDescription>
              </CardHeader>
              <CardContent>
                <span>Crop: {farm.crops}</span>
                <br />
                <span>Variety: {farm.crop_varieties}</span>
                <br />
                <span>Yield: {farm.estimated_yield}</span>
                <br />
                <span>Estimated Harvest Date: {harvestStatus}</span>
                <br />
                <span>Price: {farm.price} cedis</span>
              </CardContent>
              <CardFooter className="flex justify-between">
  
                <AlertDialog>
                  <AlertDialogTrigger>Place Order</AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Your bid has been received
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Our farms have been notified and will notify you
                        confirmation
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
        })}
      </div>
      <div className="grid grid-cols-3 max-w-[1040px] mx-auto py-8 gap-4">
        <Card className="mb-4">
          <CardHeader>
            <Image
              src="/images/cassava.webp"
              className="w-auto h-auto"
              alt="cassava"
              width={200}
              height={200}
            />
            <CardTitle>Farm ID: AGRIFARM 224</CardTitle>
            <CardDescription>
              <span>Location: Agona Nantifa</span>
              <br />
              <span>Collective: Nantifa Collective</span>
              <br />
              <span>No. of farms: 3 Farms</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <span>Crop: Cassava</span><br />
            <span>Variety: Bankye Hemaa</span><br />
            <span>Yield: 9 tons</span><br />
            <span>Estimated Harvest Date: in 3 weeks</span><br />
            <span>Price: 3700 USD</span>
          </CardContent>
          <CardFooter className="flex justify-between">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button>Place Order</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Your bid has been received
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Our farms have been notified and will notify you
                    confirmation
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Okay</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardFooter>
        </Card>
        <Card className="mb-4">
          <CardHeader>
            <Image
              src="/images/cassava.webp"
              className="w-auto h-auto"
              alt="cassava"
              width={200}
              height={200}
            />
            <CardTitle>Farm ID: AGRIFARM 200</CardTitle>
            <CardDescription>
              <span>Location: Agona Nantifa</span><br />
              <span>Collective: Nantifa Collective</span><br />
              <span>No. of farms: 5 Farms</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <span>Crop: Pineapple</span><br />
            <span>Variety: Bankye Hemaa</span><br />
            <span>Yield: 15 tons</span><br />
            <span>Estimated Harvest Date: in 6 weeks</span><br />
            <span>Price: 1800 USD</span>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button>Place Order</Button>
          </CardFooter>
        </Card>
        <Card className="mb-4">
          <CardHeader>
            <Image
              src="/images/cassava.webp"
              className="w-auto h-auto"
              alt="cassava"
              width={200}
              height={200}
            />
            <CardTitle>Farm ID: AGRIFARM 300</CardTitle>
            <CardDescription>
              <span>Location: Agona Nantifa</span><br />
              <span>Collective: Nantifa Collective</span><br />
              <span>No. of farms: 2 Farms</span><br />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <span>Crop: Cassava</span><br />
            <span>Variety: Bankye Hemaa</span><br />
            <span>Yield: 5 tons</span><br />
            <span>Estimated Harvest Date: in 3 weeks</span><br />
            <span>Price: 1500 USD</span><br />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button>Place Order</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
