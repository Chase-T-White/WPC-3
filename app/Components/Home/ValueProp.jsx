"use client";

import { useRef } from "react";
import Testimonials from "./additionalComponents/Testimonials";
import CompanyValues from "./additionalComponents/CompanyValues";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const ValueProp = () => {
  //   Setting up animations
  //   Scroll animations

  const sectionRef = useRef();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 0.7], ["40%", "-30%"]);

  return (
    <section ref={sectionRef} className="w-screen min-h-screen min-h-[600px]">
      <article className="grid grid-cols-[25px_1fr_25px] md:grid-cols-2 grid-rows-2 md:grid-rows-[1fr_3fr_1fr]">
        <div className="relative col-start-2 md:col-start-1 row-start-1 md:row-start-2 overflow-hidden isolate ">
          <Image
            alt="Front of a nice house during the summer"
            src={"/images/Home/valueProp.jpg"}
            fill
            className="object-cover object-right scale-150 -z-10"
          />
          <motion.h2
            style={{ x }}
            className="absolute bottom-4 text-primary-color whitespace-nowrap"
          >
            Crafting Dreams, Defining Excellence
          </motion.h2>
        </div>
        <div className="col-start-2 md:col-start-2 row-start-2 md:row-start-2 w-full h-full flex items-center justify-center max-w-[100ch] row-start-2">
          <CompanyValues />
        </div>
      </article>
      <Testimonials />
    </section>
  );
};

export default ValueProp;
