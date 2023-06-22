import React from "react";
import Image from "next/image";

const PageHeader = ({ heading, text, image }) => {
  return (
    <header>
      <header className="grid grid-cols-[100px_repeat(7,_1fr)_100px] grid-rows-[200px_5fr_100px] isolate">
        <div className="relative h-[60vh] min-h-[600px] col-start-1 col-span-4 row-start-2 -z-10">
          <Image
            src={image}
            alt="Work Bench"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="flex items-center col-start-4 col-span-4 row-start-2">
          <div className="bg-bg-gradient-dark text-white py-8 px-16">
            <h2 className="text-primary-color">{heading}</h2>
            <p>{text}</p>
          </div>
        </div>
      </header>
    </header>
  );
};

export default PageHeader;
