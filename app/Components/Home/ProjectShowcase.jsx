import React from "react";
import Link from "next/link";
import ProjectCarousal from "../ProjectCarousal";

const ProjectShowcase = () => {
  return (
    <section>
      <header>
        <h2>
          Discover Our Impressive Portfolio of Construction and Remodeling
          Projects.
        </h2>
        <div>
          <button>
            <Link href="#">View All Projects</Link>
          </button>
          <button>
            <Link href="#">Schedule A Consultation</Link>
          </button>
        </div>
      </header>
      <ProjectCarousal />
    </section>
  );
};

export default ProjectShowcase;
