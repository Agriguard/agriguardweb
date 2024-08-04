"use client";

import React from "react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const text = ["Uniting smallholder farmers", "Building stronger markets"];

export default function HeroText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= text.length - 1) return 0;
        return state + 1;
      });
    }, 3500);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative flex w-full items-center py-4 text-start justify-center z-40">
      <AnimatePresence mode="wait">
        <motion.div
          className="absolute cursor-pointer text-4xl lg:text-6xl font-semibold tracking-tight text-center text-white"
          key={index}
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -90, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {text[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
