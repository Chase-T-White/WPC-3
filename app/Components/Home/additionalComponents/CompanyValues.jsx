"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const CompanyValues = () => {
  const ref = useRef();
  const [valueProps, setValueProps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //  InView animations

  const isInView = useInView(ref, { once: true, amount: "some" });
  const mainControls = useAnimation();

  console.log(isInView);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

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

  if (isLoading) {
    return <h1>loading</h1>;
  }

  return (
    <ul ref={ref} className="h-full mx-16">
      {valueProps.map((value, i) => {
        return (
          <li key={i} className="mb-4 overflow-hidden">
            <motion.p
              variants={{
                initial: { y: "-100%" },
                visible: { y: 0 },
              }}
              initial="initial"
              animate={mainControls}
              transition={{ duration: 1, type: "linear", delay: i * 0.1 }}
            >
              {value.value}
            </motion.p>
          </li>
        );
      })}
    </ul>
  );
};

export default CompanyValues;
