import React from "react";
import Image from "next/image";
import Link from "next/link";

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
      className="flex items-end relative row-span-2 bg-dark isolate rounded-lg shadow-xl overflow-hidden min-h-[350px]"
    >
      <div className="absolute w-full h-full -z-10">
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
        <button className="btn btn__primary btn__sm">
          <Link href="#">Learn More</Link>
        </button>
      </div>
    </div>
  );
};

export default ServiceCategoryCard;
