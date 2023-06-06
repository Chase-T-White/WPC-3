"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentTest, setCurrentTest] = useState(null);
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const res = await fetch("/api/testimonials");
      const data = await res.json();
      console.log(data);
      if (data) {
        setTestimonials(data);
        setCurrentTest(data[0]);
        setIsLoading(false);
      } else {
        throw new Error();
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (index === testimonials.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
      setCurrentTest(testimonials[index]);
    }, 4000);
  }, [index, testimonials]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <article className="w-full flex justify-center items-center">
      <AnimatePresence>
        <motion.div
          variants={{
            initial: {
              x: "-100vw",
            },
            animate: {
              x: 0,
              transition: {
                duration: 5,
                type: "linear",
                delay: 1,
              },
            },
            exit: {
              opacity: 0,
              transition: {
                duration: 1,
                type: "linear",
              },
            },
          }}
          key={index}
        >
          <p>{currentTest.review}</p>
          <p>
            <small>
              --<em>{currentTest.person}</em>, {currentTest.place}
            </small>
          </p>
        </motion.div>
      </AnimatePresence>
    </article>
  );
};

export default Testimonials;
