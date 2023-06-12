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
    }, 10000);
    setCurrentTest(testimonials[index]);
  }, [index, testimonials]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <article className="w-full flex justify-center items-center py-8">
      <div className="w-full max-w-[800px] h-[200px] flex items-center justify-center p-8 bg-bg-dark-orange">
        <AnimatePresence>
          <motion.div
            variants={{
              initial: {
                opacity: 0,
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 1,
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
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <p>{currentTest.review}</p>
            <p className="text-primary-color">
              <small>
                --<em>{currentTest.person}</em>, {currentTest.location}
              </small>
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </article>
  );
};

export default Testimonials;
