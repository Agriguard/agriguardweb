"use client";

import { motion } from "framer-motion";
import { BadgeDollarSign, BookOpenText, LucideSmartphone } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProjectsData = [
  {
    id: 1,
    name: "Your farmer's companion",
    description:
      "Get daily AI-Powered actionable insights, task management, cost tracking and season planning for better harvests.",
    link: "https://play.google.com/store/apps/details?id=com.agriguard.mobile",
    icon: <LucideSmartphone />,
  },
  {
    id: 2,
    name: "Market Access",
    description:
      "List together. We help aggregate smallholder farmers into digital cooperatives for collective purchasing.",
    link: "/market-intelligence",
    icon: <BadgeDollarSign />,
  },
  {
    id: 3,
    name: "Market Intelligence",
    description:
      "Know the market. We provide data-driven insights on smallholder farmer database for informed decision making.",
    link: "/auth/signup",
    icon: <BookOpenText />,
  },
];

const ImageSection = () => {
  return (
    <div>
      <div className="grid w-full grid-cols-1 gap-y-5 lg:gap-y-0 gap-x-10 md:grid-cols-3">
        {ProjectsData.map((project) => (
          <Link
            key={project.id}
            rel="noopener noreferrer"
            href={project.link}
          >
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", bounce: 0.7 }}
              className="mt-5 text-left border p-3 border-primary/50 hover:bg-primary/10 h-full rounded-xl group"
            >
              <div className="group-hover:text-white group-hover:bg-primary w-fit p-1 rounded-md bg-primary/50 text-white">
                {project.icon}
              </div>
              <div className="my-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                {project.name}
              </div>
              <div className="text-sm font-normal text-gray-500 dark:text-gray-500">
                {project.description}
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default function Solution() {
  return (
    <section className="max-w-[65rem] mx-auto mb-5 lg:mb-12 px-4 xl:px-0" id="features">
      <h2 className="text-center text-primary font-bold capitalize">
        Bridge between producers and buyers
      </h2>
      <p className="lg:w-4/6 mx-auto text-center my-5">
        Agriguard is more than just a marketplace. We&apos;re building a robust
        data ecosystem for smallholder farmers. Our platform provides actionable
        insights, connects farmers to optimal markets, and empowers them to
        thrive.
      </p>
      <ImageSection />
    </section>
  );
}
