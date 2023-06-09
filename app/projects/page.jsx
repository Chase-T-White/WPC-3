import React from "react";
import PageHeader from "../Components/PageHeader";
import ProjectCarousal from "../Components/ProjectCarousal";

const ProjectShowcase = () => {
  const heading = "Portfolio";
  const text =
    "Step into our world of exceptional craftsmanship and visionary design. Explore our curated collection of remarkable projects that embody our dedication to quality, innovation, and client satisfaction. From stunning residential transformations to impressive commercial builds, each project is a testament to our unwavering commitment to turning dreams into reality. Get inspired and discover the possibilities with White Peak Contracting.";
  const image = "/images/Projects/projectHeader.jpg";
  return (
    <main className="bg-bg-light text-dark">
      <PageHeader heading={heading} text={text} image={image} />
      <ProjectCarousal />
      <article>
        {/* Projects gallery */}
        {/* Possibly add some filters/sorting */}
      </article>
    </main>
  );
};

export default ProjectShowcase;
