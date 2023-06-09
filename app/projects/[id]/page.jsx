"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Project = ({ params }) => {
  const [project, setProject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      const res = await fetch("/api/projects");
      const data = await res.json();

      const pageProject = data.find((item) => {
        return item.id === Number(params.id);
      });

      setProject(pageProject);
      setIsLoading(false);
    };

    fetchProject();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <main className="w-screen max-w-[1200px] mx-auto">
      <header className="mt-[200px] mb-28">
        <h2 className="text-center text-primary-color">
          {project.projectName}
        </h2>
        <div>
          <p>{project.projectOverview}</p>
        </div>
      </header>
      <section>
        {project.projectTimeline.map((stage, i) => {
          let lastStage = false;

          if (i === project.projectTimeline.length - 1) {
            lastStage = true;
          }

          let stagePic = null;
          if (i === 0) {
            stagePic = project.beforeImg;
          } else if (i === project.projectTimeline.length - 1) {
            stagePic = project.afterImg;
          } else {
            stagePic = stage.stageImg;
          }
          return (
            <article
              key={i}
              className={`border-b-2 border-b-solid border-b-primary-color ${
                i % 2 === 0
                  ? "border-r-primary-color border-r-2 border-r-solid"
                  : "border-l-primary-color border-l-2 border-l-solid"
              } py-64 px-8 grid grid-cols-2 gap-24`}
            >
              <div className={`${i % 2 !== 0 ? "col-start-2" : ""}`}>
                <p>{stage.projectDetails}</p>
                {lastStage && (
                  <div className="flex gap-16">
                    <button className="btn btn__primary">
                      <Link href="/contact">Schedule a Consultation</Link>
                    </button>
                    <button className="btn">
                      <Link href="/projects">View More Projects</Link>
                    </button>
                  </div>
                )}
              </div>
              <div
                className={`relative ${
                  i % 2 !== 0 ? "col-start-1 row-start-1" : ""
                }`}
              >
                <Image
                  src={stagePic}
                  alt="stage picture"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Project;
