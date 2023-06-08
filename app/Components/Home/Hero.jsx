import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-screen h-screen min-h-[700px] relative isolate">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover object-center -z-10"
      >
        <source src="/videos/heroBg.mp4" type="video/mp4" />
        <source src="/videos/heroBg.webm" type="video/webm" />
      </video>
      <div className="flex flex-col w-full max-w-[1200px] h-full mx-auto justify-center items-center">
        <h1 className="text-center text-primary-color">
          White Peak Contracting
        </h1>
        <h2 className="text-center mb-8">
          Bridging the Visionary Gap: Translating Ideas into Action
        </h2>
        <div>
          <Link href="#" className="btn btn__primary mr-16">
            Explore Our Services
          </Link>
          <Link href="#" className="btn">
            View Our Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
