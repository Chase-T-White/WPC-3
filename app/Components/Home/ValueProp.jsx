"use client";

import { useState, useEffect, useRef } from "react";
import Testimonials from "./additionalComponents/Testimonials";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useAnimation,
} from "framer-motion";

const ValueProp = () => {
  const [valueProps, setValueProps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //   Fetching data

  useEffect(() => {
    const fetchValueProps = async () => {
      const res = await fetch("/api/valueProps");
      const data = await res.json();
      if (data) {
        setValueProps(data);
        setIsLoading(false);
      } else {
        throw new Error();
      }
    };

    fetchValueProps();
  }, []);

  //   Setting up animations
  //   Scroll animations

  const sectionRef = useRef();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 0.7], ["40%", "-30%"]);

  //  InView animations

  const isInView = useInView(sectionRef, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  let delay = 0;

  if (isLoading) {
    return <h1>loading</h1>;
  }

  return (
    <section ref={sectionRef} className="w-screen h-screen min-h-[600px]">
      <article className="h-3/4 grid grid-cols-2 grid-rows-[1fr_3fr_1fr]">
        <div className="relative row-start-2 overflow-hidden isolate">
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
        <div className="w-full h-full flex items-center justify-center max-w-[80ch] row-start-2">
          <ul className="h-full flex flex-col justify-between mx-16">
            {valueProps.map((value, i) => {
              //   delay += 0.05;
              return (
                <li key={i} className="overflow-hidden">
                  <motion.p
                    variants={{
                      initial: { y: "-100%" },
                      visible: { y: 0 },
                    }}
                    initial="initial"
                    animate={mainControls}
                    transition={{ type: "linear", duration: 1 }}
                  >
                    {value.value}
                  </motion.p>
                </li>
              );
            })}
          </ul>
        </div>
      </article>
      <Testimonials />
    </section>
  );
};

export default ValueProp;
