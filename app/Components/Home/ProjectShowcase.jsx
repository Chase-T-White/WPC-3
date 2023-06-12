import React from "react";
import Link from "next/link";
import ProjectCarousal from "../ProjectCarousal";

const ProjectShowcase = () => {
  return (
    <section>
      <header className="mx-[50px] text-center">
        <h2 className="text-primary-color mb-8">
          Discover Our Impressive Portfolio of Construction and Remodeling
          Projects.
        </h2>
        <div>
          <button className="btn btn__primary mr-16">
            <Link href="#">Schedule A Consultation</Link>
          </button>
          <button className="btn">
            <Link href="#">View All Projects</Link>
          </button>
        </div>
      </header>
      <ProjectCarousal />
    </section>
  );
};

export default ProjectShowcase;
