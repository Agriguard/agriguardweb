import React from "react";

const stats = [
  {
    stat: "70",
    unit: "%",
    description:
      "of Africa’s population relies on agriculture for their livelihood",
  },
  {
    stat: "100",
    unit: "$",
    description: "average monthly income for Ghanaian farmers",
  },
  {
    stat: "60",
    unit: "%",
    description: "of the world’s uncultivated arable land is in Africa",
  },
  {
    stat: "200",
    unit: "+",
    description: "million people in Africa are malnourished",
  },
];

export default function ProblemStats() {
  return (
    <div className="hidden lg:flex items-center justify-center overflow-hidden rounded-br-2xl rounded-bl-2xl text-center h-full text-white bg-[url('/images/problem-stats.webp')] bg-center bg-fixed relative">
      <div className="absolute inset-0 bg-black/35 z-10" />
      <div className="w-full h-full text-white relative flex gap-4 p-8 text-center z-20">
        {stats.map((stat) => (
          <div key={stat.stat}>
            <p className="text-2xl font-semibold">
              {stat.stat} <span className="text-primary">{stat.unit}</span>
            </p>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
