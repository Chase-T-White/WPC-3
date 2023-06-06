"use client";

import { useState, useEffect } from "react";
import ServiceCategoryCard from "./additionalComponents/ServiceCategoryCard";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      const res = await fetch("/api/services");
      const data = await res.json();
      if (data) {
        setServices(data);
        setIsLoading(false);
      } else {
        throw new Error();
      }
    };

    fetchServices();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  let cardCol = 1;
  let cardRow = 1;

  return (
    <section className="h-screen grid grid-cols-2">
      <article className="col-span-1 bg-white text-black overflow-hidden">
        <div className="relative max-w-[80%] h-full mx-auto">
          <h2 className="mt-32 mb-8">
            It's <span className="text-primary-color">Project Season</span>
          </h2>
          <p className="max-w-[60ch] mb-[24px]">
            As the warm weather returns and the days grow longer, it's time to
            tackle your to-do list. Whether you're looking to update your home's
            siding or break ground on a new shop, White Peak Contracting is here
            to make your visions a reality. With our extensive knowledge and
            experience, we'll guide you through every step of the process,
            ensuring exceptional results. As Montana's premiere decorative
            lighting installer, we also offer the perfect solution to elevate
            your holiday celebrations with OELO permanent LED lights. Start
            planning for the holidays now and let us transform your space with
            the magic of light!
          </p>
          <button>
            <Link href="#">CTA</Link>
          </button>
          <div className="absolute bottom-0 right-[-250px] w-[30vw] h-[30vw] -rotate-45">
            <Image src={"/images/Home/services.svg"} fill />
          </div>
        </div>
      </article>
      <article className="col-start-2 bg-gray grid grid-cols-[100px_1fr_1fr_100px] grid-rows-7 gap-8">
        {services.map((service, i) => {
          if (cardCol === 3) {
            cardCol -= 1;
          } else {
            cardCol += 1;
          }
          cardRow += 1;
          return (
            <ServiceCategoryCard
              gridStyleCol={cardCol}
              gridStyleRow={cardRow}
              key={i}
              {...service}
            />
          );
        })}
      </article>
    </section>
  );
};

export default Services;
