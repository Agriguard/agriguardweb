"use client";

import { LucideStar } from "lucide-react";
import { FC, useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import TrustedBy from "./trusted-by";

const testimonials = [
  {
    id: 1,
    name: "Steven Hordor",
    description:
      "Agriguard has really helped with a lot with their personalized advisory sms I receive every morning before going to the farm. A day without their SMS and I feel vulnerable",
    profession: "Maize Farmer",
    location: "Nantifa, Ghana",
  },
  {
    id: 2,
    name: "Lawrence Kojo Baah",
    description:
      "I used the mapping software on the Agriguard app to determine the acreage of my boss's farm and I applaud its accuracy. I now have the edge I need to thrive in farming and to boost my crop yields and secure a brighter future for my family.",
    profession: "Farm Manager",
    location: "Asafo, Ghana",
  },
  {
    id: 3,
    name: "KGF Farms",
    description:
      "Agriguard has become an indispensable tool. They give me all the weather info I need and enable me to provide timely and tailored support to farmers in our cooperative. This helps me help farmers better.",
    profession: "Cooperative Head",
    location: "Bamenda, Cameroon",
  },
];

interface TestimonalCardProps {
  name: string;
  description: string;
  profession: string;
  location: string;
}

function VideoPlayer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <ReactPlayer
      url="https://youtu.be/rcqJjxym9nE"
      width="100%"
      height="100%"
      controls
    />
  );
}

const TestimonialCard: FC<TestimonalCardProps> = ({
  name,
  description,
  profession,
  location,
}) => {
  return (
    <div
      className={`card-shadow dark:border-neutral-90 relative flex h-auto max-w-[22rem] select-none flex-col items-start justify-center overflow-hidden rounded-2xl border border-neutral-100 p-5 shadow-sm transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-sm dark:border-neutral-800 dark:hover:shadow-white/10`}
    >
      <div className="absolute right-0 top-0 h-24 w-24 rounded-2xl bg-gradient-to-r from-primary  to-primary opacity-50 blur-3xl"></div>
      <div className="mb-0 flex h-fit flex-row items-center gap-3">
        <div className="mb-0 flex h-fit flex-col items-start">
          <h3 className="m-0 text-lg font-medium text-gray-900 dark:text-gray-100">
            {name}
          </h3>
          <p className="font-regular m-0 text-center text-gray-600 dark:text-gray-400">
            {profession}
          </p>
          <div className="flex">
            <LucideStar className="w-4 h-4 fill-yellow-500 text-white" />
            <LucideStar className="w-4 h-4 fill-yellow-500 text-white" />
            <LucideStar className="w-4 h-4 fill-yellow-500 text-white" />
            <LucideStar className="w-4 h-4 fill-yellow-500 text-white" />
            <LucideStar className="w-4 h-4 fill-yellow-500 text-white" />
          </div>
        </div>
      </div>
      <p className="mb-0 mt-3 text-left text-sm font-light text-gray-600 dark:text-gray-400">
        {description}
      </p>
      <p className="font-regular m-0 text-center mt-5">{location}</p>
    </div>
  );
};

const Testimonals = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 pt-12 max-w-[65rem] mx-auto px-4 xl:px-0">
      <h2 className="text-center text-primary font-bold capitalize">
        Listen to what our clients say
      </h2>
      <div className="w-full h-[24rem] rounded-xl overflow-hidden">
        <VideoPlayer />
      </div>
      <div className="relative mt-12 flex h-full w-full flex-col items-center justify-center gap-5 md:flex-row">
        {testimonials.map((detail) => (
          <TestimonialCard key={detail.id} {...detail} />
        ))}
      </div>
      <TrustedBy />
    </div>
  );
};

export default Testimonals;
