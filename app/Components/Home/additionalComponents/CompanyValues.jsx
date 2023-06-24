"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CompanyValues = () => {
  const ref = useRef();
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

  if (isLoading) {
    return <h1>loading</h1>;
  }

  return (
    <ul ref={ref} className="h-full mx-0 md:mx-8 lg:mx-16 pt-8 md:pt-0">
      {valueProps.map((value, i) => {
        return (
          <motion.li key={i} className="mb-4 overflow-hidden">
            <motion.p
              initial={{ y: "-100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, type: "linear", delay: i * 0.2 }}
              viewport={{ once: true }}
              className="text-sm lg:text-base xl:text-xl"
            >
              {value.value}
            </motion.p>
          </motion.li>
        );
      })}
    </ul>
  );
};

export default CompanyValues;
