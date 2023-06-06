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
      <div className="flex flex-col w-full h-full justify-center items-center">
        <h1>White Peak Contracting</h1>
        <h2>Bridging the Visionary Gap: Translating Ideas into Action</h2>
        <div>
          <button>
            <Link href="#">Explore Our Services</Link>
          </button>
          <button>
            <Link href="#">View Our Portfolio</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
