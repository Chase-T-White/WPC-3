import React from "react";
import Image from "next/image";
import ProjectCarousal from "../Components/ProjectCarousal";

const ProjectShowcase = () => {
  return (
    <main className="bg-bg-light text-dark">
      <header className="grid grid-cols-[100px_repeat(7,_1fr)_100px] grid-rows-[200px_5fr_100px] isolate">
        <div className="relative h-[60vh] min-h-[600px] col-start-1 col-span-4 row-start-2 -z-10">
          <Image
            src={"/images/Projects/projectHeader.jpg"}
            alt="Work Bench"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="flex items-center col-start-4 col-span-4 row-start-2">
          <div className="bg-bg-gradient-dark text-white">
            <h2 className="text-primary-color">Portfolio</h2>
            <p>
              Step into our world of exceptional craftsmanship and visionary
              design. Explore our curated collection of remarkable projects that
              embody our dedication to quality, innovation, and client
              satisfaction. From stunning residential transformations to
              impressive commercial builds, each project is a testament to our
              unwavering commitment to turning dreams into reality. Get inspired
              and discover the possibilities with White Peak Contracting.
            </p>
          </div>
        </div>
      </header>
      <ProjectCarousal />
      <article>
        {/* Projects gallery */}
        {/* Possibly add some filters/sorting */}
      </article>
    </main>
  );
};

export default ProjectShowcase;
