"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ServiceCategoryCard = ({
  service,
  description,
  serviceImg,
  gridStyleCol,
  gridStyleRow,
}) => {
  return (
    <div
      style={{
        gridColumn: gridStyleCol,
        gridRowStart: gridStyleRow,
      }}
      className="row-span-2 rounded-lg bg-dark shadow-lg shadow-dark overflow-hidden"
    >
      <motion.div
        initial={{ y: "-100%" }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1.5, type: "linear" }}
        viewport={{ once: true }}
        className="flex items-end relative isolate overflow-hidden min-h-[350px]"
      >
        <div className="absolute w-full h-full -z-10 hover:scale-125 duration-500 ease-in-out">
          <Image
            className="object-cover object-center"
            alt={service}
            src={serviceImg}
            fill
          />
        </div>
        <div className="mx-4 pb-4 bg-dark/75 rounded-t-lg">
          <h6 className="text-center text-primary-color">{service}</h6>
          <p className="px-4 text-base mb-[4px]">{description}</p>
          <button className="btn btn__primary btn__sm mx-4">
            <Link href="#">Learn More</Link>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceCategoryCard;
