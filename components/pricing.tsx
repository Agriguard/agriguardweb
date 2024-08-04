"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

const pricingPlans = [
  {
    name: "Free",
    description: "Start with essential tools to manage your production cycles",
    monthlyPrice: "Free",
    annualPrice: "Free",
    features: [
      "Up to 50 farmers",
      "1 farm per farmer",
      "Up to 5 segments per farm",
      "Daily actionable insights",
      "Task Management",
      "Up to 10 acres coverage",
      "Agriguard Support Manager"
    ],
  },
  {
    name: "Premium",
    description:
      "Get the all the benefits in free including extras",
    monthlyPrice: 9.99,
    annualPrice: 89.99,
    features: [
      "Everything in Free plan",
      "Unlimited number of farmers",
      "3 farms per farmer",
      "Up to 10 segments per farm",
      "Up to 50 acres coverage",
      "Admin Dashboard",
      "Aggregated Market Access",
      "Market intelligence"
    ],
  },
  {
    name: "Enterprise",
    description:
      "Recommended for cooperatives and agribusinesses",
    monthlyPrice: "Let's Talk",
    annualPrice: "Let's Talk",
    features: [
      "Everything in Premium plan",
      "5 farms per farmer",
      "Up to 50 segments per farm",
      "Up to 100 acres coverage",
      "Weekly downloadable farm reports",
    ],
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"M" | "A">("M");

  const Heading = () => (
    <div className="relative z-10 my-12 flex flex-col items-center justify-center gap-4">
      <div className="flex w-full flex-col items-center justify-center space-y-4 md:items-center">
        <div className="inline-block rounded-full capitalize font-bold text-primary">
          {" "}
          Simple and affordable pricing.
        </div>
        <p className="text-md max-w-xl text-gray-700 text-center dark:text-gray-300">
          Choose the plan that fits your farm best and start optimizing your
          yields today!
        </p>
      </div>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setBillingCycle("M")}
          className={cn(
            `rounded-full px-4 py-2 text-sm font-medium `,
            billingCycle === "M"
              ? "relative bg-primary text-white "
              : "text-gray-700 hover:bg-primary/10 dark:text-gray-300 dark:hover:text-black"
          )}
        >
          Monthly
          {billingCycle === "M" && <BackgroundShift shiftKey="monthly" />}
        </button>
        <button
          onClick={() => setBillingCycle("A")}
          className={cn(
            `rounded-full px-4 py-2 text-sm font-medium `,
            billingCycle === "A"
              ? "relative bg-primary text-white "
              : "text-gray-700 hover:bg-primary/10 dark:text-gray-300 dark:hover:text-black"
          )}
        >
          Annual
          {billingCycle === "A" && <BackgroundShift shiftKey="annual" />}
        </button>
      </div>
    </div>
  );

  const PricingCards = () => (
    <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 lg:flex-row lg:gap-4">
      {pricingPlans.map((plan, index) => (
        <div
          key={index}
          className="w-full rounded-xl border-[1px] border-gray-300 p-6 text-left dark:border-gray-600"
        >
          <p className="mb-1 mt-0 text-sm font-medium uppercase text-primary">
            {plan.name}
          </p>
          <p className="my-0 mb-6 text-sm text-gray-600">{plan.description}</p>
          <div className="mb-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={billingCycle === "M" ? "monthly" : "annual"}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="my-0 text-3xl font-semibold text-gray-900 dark:text-gray-100"
              >
                <span>
                  ${billingCycle === "M" ? plan.monthlyPrice : plan.annualPrice}
                </span>
                <span className="text-sm font-medium">
                  /{billingCycle === "M" ? "month" : "year"}
                </span>
              </motion.p>
            </AnimatePresence>
            <motion.button
              whileTap={{ scale: 0.985 }}
              className="mt-8 w-full rounded-full bg-primary py-2 text-sm font-medium text-white hover:bg-primary/90"
            >
              Get Started
            </motion.button>
          </div>
          {plan.features.map((feature, idx) => (
            <div key={idx} className="mb-3 flex items-center gap-2">
              <Check className="text-primary" size={18} />
              <span className="text-sm text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden lg:py-12 text-black max-w-[65rem] mx-auto px-4 xl:px-0" id="pricing">
      <Heading />
      <PricingCards />
    </section>
  );
};

const BackgroundShift = ({ shiftKey }: { shiftKey: string }) => (
  <motion.span
    key={shiftKey}
    layoutId="bg-shift"
    className="absolute inset-0 -z-10 rounded-full bg-primary"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
  />
);

export default function PricingPage() {
  return <Pricing />;
}
