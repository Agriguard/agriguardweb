import Link from "next/link";
import React from "react";
import HeroText from "./hero-text";
import { Button } from "./ui/button";
import { LucideDownload, LucideTrendingUp } from "lucide-react";
import ProblemStats from "./problem-stats";

export default function Hero() {
  return (
    <div className="min-h-screen items-center justify-center relative">
      <div className="relative w-full h-full bg-[url('/images/hero-bg.jpeg')] bg-cover bg-center py-20 mt-[3.1875rem] z-10">
        <div className="relative z-20 max-w-[65rem] mx-auto">
          <HeroText />
          <p className="text-primary text-3xl lg:text-5xl w-3/4 mx-auto lg:w-full mt-7 text-center tracking-tight">
            through data-driven insights
          </p>
          <p className="text-white text-center text-sm lg:text-base w-5/6 lg:w-4/6 mx-auto my-5">
            Agriguard empowers smallholder farmers to boost income through
            data-driven farming and direct market access. We unite farmers,
            optimize yields, and connect them to profitable buyers.
          </p>
          <div className="mx-auto flex gap-4 justify-center">
            <Link href="/market-intelligence">
              <Button className="rounded-full">
                Explore Market
                <LucideTrendingUp className="ms-2 h-4 w-4" />
              </Button>
            </Link>
            <Link
              href="https://play.google.com/store/apps/details?id=com.agriguard.mobile"
              target="_blank"
            >
              <Button
                className="rounded-full text-white hover:text-white font-semibold hover:bg-transparent"
                variant="ghost"
              >
                Download App
                <LucideDownload className="ms-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/75 z-10" />
      </div>
      <div className="bg-[#2fb95d10] py-12 px-4 xl:px-0">
        <div className="max-w-[65rem] mx-auto ">
          <h2 className="text-center text-primary font-bold">
            A Growing Crisis
          </h2>
          <p className="text-center lg:text-xl font-light lg:w-4/5 mx-auto my-5 tracking-wide">
            <span className="text-secondary font-semibold">70% of farmers in Africa</span> face disrupted production cycles
            and <br/> a <span className="text-secondary font-semibold">10% drop in crop yield</span> due to insufficient
            information, poor management and generalised data, impacting food
            security and farmer livelihood
          </p>
          <ProblemStats/>
        </div>
      </div>
    </div>
  );
}
