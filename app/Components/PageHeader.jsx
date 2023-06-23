"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PageHeader = ({ heading, text, image }) => {
  return (
    <header>
      <header className="grid grid-cols-[100px_repeat(7,_1fr)_100px] grid-rows-[200px_5fr_100px] isolate">
        <div className="h-[60vh] min-h-[600px] col-span-full sm:col-start-1 sm:col-span-6 xl:col-start-1 xl:col-span-4 row-start-2 -z-10">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1, type: "linear" }}
            className="relative overflow-hidden"
          >
            <Image
              src={image}
              alt="Work Bench"
              fill
              className="object-cover object-center"
            />
          </motion.div>
        </div>
        <div className="flex items-center col-span-full sm:col-start-3 sm:col-span-6 xl:col-start-4 xl:col-span-4 row-start-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              type: "linear",
              delay: 1,
              when: "beforeChildren",
              staggerChildren: 0.2,
            }}
            className="bg-bg-gradient-dark text-white py-8 px-8 sm:px-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: "-5%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: "linear", delay: 1.5 }}
              className="text-primary-color mb-4"
            >
              {heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: "-5%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: "linear", delay: 1.7 }}
            >
              {text}
            </motion.p>
          </motion.div>
        </div>
      </header>
    </header>
  );
};

export default PageHeader;
