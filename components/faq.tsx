"use client";

import { motion, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

interface AccordionItemProps {
  title: string;
  content: string;
  isExpanded: boolean;
  onToggle: () => void;
}

interface AccordionProps {
  items: Array<{
    title: string;
    content: string;
  }>;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isExpanded,
  onToggle,
}) => {
  const cardVariants: Variants = {
    collapsed: {
      height: "60px",
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
    expanded: {
      height: "auto",
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
  };

  const contentVariants: Variants = {
    collapsed: { opacity: 0 },
    expanded: {
      opacity: 1,
      transition: { delay: 0.1 },
    },
  };

  const chevronVariants: Variants = {
    collapsed: { rotate: 0 },
    expanded: { rotate: 180 },
  };

  return (
    <motion.div
      className={`w-90 dark:bg-gray-800' h-full cursor-pointer select-none overflow-hidden rounded-lg border  dark:border-gray-700`}
      variants={cardVariants}
      initial="collapsed"
      animate={isExpanded ? "expanded" : "collapsed"}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between p-4 text-gray-900 dark:text-gray-100">
        <h2 className="m-0 text-sm font-semibold text-primary">{title}</h2>
        <motion.div variants={chevronVariants}>
          <ChevronDown size={18} />
        </motion.div>
      </div>
      <motion.div
        className="text-md select-none px-4 py-4"
        variants={contentVariants}
        initial="collapsed"
        animate={isExpanded ? "expanded" : "collapsed"}
      >
        <p className="m-0 text-sm text-gray-900 dark:text-gray-100">
          {content}
        </p>
      </motion.div>
    </motion.div>
  );
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isExpanded={expandedIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

const accordionItems = [
  {
    title: "How accurate are Agriguard's weather forecasts?",
    content:
      "Agriguard uses real-time satellite data and advanced forecasting models to provide accurate and reliable weather predictions for your farm's specific location. While no forecast can be 100% precise, our goal is to deliver timely and actionable information to support your decision-making process.",
  },
  {
    title: "How does Agriguard's mapping functionality work?",
    content:
      "Agriguard allows mapping the borders of a farm using mobile phone GPS, enabling you to visualize its location and access weather data specific to your area. With our mapping tool, you can accurately identify your farm's boundaries and optimize decision-making based on local weather conditions.",
  },
  {
    title: "Can I access Agriguard's services offline?",
    content:
      "While some features may require an internet connection, Agriguard offers offline capabilities for essential functionalities such as viewing historical weather data and accessing basic advisory services. This ensures that farmers in areas with limited connectivity can still benefit from our platform.",
  },
];

const FaqSection: React.FC = () => {
  return (
    <section className="max-w-[65rem] mx-auto py-12 px-4 xl:px-0" id="faqs">
      <div className="lg:grid grid-cols-3">
        <div className="lg:col-span-1 text-center lg:text-start ">
          <h2 className="text-5xl text-black/70 font-bold capitalize">
            Common <br />
            Questions
          </h2>
          <p className="my-5 lg:mt-5">Find the answers you need</p>
        </div>
        <div className="col-span-2">
          <Accordion items={accordionItems} />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
