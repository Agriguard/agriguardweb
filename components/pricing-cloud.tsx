import { ChevronsDown, ChevronsUp, ChevronUp } from "lucide-react";
import React from "react";

const logos = [
  {
    name: "Nantifa",
    crop: "Maize",
    location: "20 Farmers",
  },
  {
    name: "Price",
    crop: "Cassava",
    icon: <ChevronsUp className="w-4 h-4"/>,
    color: "text-primary",
    price: "$50 per kg",
  },
  {
    name: "Nantifa",
    crop: "Cassava",
    location: "10 Farmers",
  },
  {
    name: "Price",
    crop: "Maize",
    icon: <ChevronsDown className="w-4 h-4"/>,
    color: "text-red-500",
    price: "$33 per kg",
  },
  {
    name: "Aburi",
    crop: "Cassava",
    location: "10 Farmers",
  },
  {
    name: "Price",
    crop: "Pineapple",
    icon: <ChevronsUp className="w-4 h-4"/>,
    color: "text-primary",
    price: "$2 per unit",
  },
  {
    name: "Nsawam",
    crop: "Pineapple",
    location: "50 Farmers",
  },
  {
    name: "Price",
    crop: "Cassava",
    icon: <ChevronsUp className="w-4 h-4"/>,
    color: "text-primary",
    price: "$50 per kg",
  },
  {
    name: "Nantifa",
    crop: "Cassava acres",
    location: "30 ac",
  },
];

export default function InsightsCloud() {
  return (
    <div className="w-full border-b-2 border-primary shadow-lg">
      <div className="mx-auto w-full px-4 md:px-8">
        <div
          className="group relative flex gap-6 overflow-hidden p-2"
          style={{
            maskImage:
              "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
          }}
        >
          {Array(5)
            .fill(null)
            .map((index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
              >
                {logos.map((logo, key) => (
                  <div key={key} className="text-xs">
                    <p className=" font-semibold">{logo.name}</p>
                    <p>{logo.crop}</p>
                    <p className="">{logo.location}</p>
                    <div className="flex text-xs">
                        <p>{logo.price}</p>
                        <p className={`${logo.color}`}>{logo.icon}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
