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
    <main className="w-screen max-w-[1400px] mx-auto">
      <header className="mt-[300px] mb-28">
        <h2 className="text-center text-primary-color mb-8">
          {project.projectName}
        </h2>
        <div className="max-w-[100ch] mx-auto">
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
              className={`border-b-2 border-dashed border-b-primary-color ${
                i % 2 === 0
                  ? "border-r-primary-color border-r-2"
                  : "border-l-primary-color border-l-2"
              } py-64 px-8 grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-24`}
            >
              <div
                className={`flex flex-col justify-center ${
                  i % 2 !== 0 ? "row-start-2 md:col-start-2" : ""
                }`}
              >
                <p>{stage.projectDetails}</p>
                {lastStage && (
                  <div className="flex flex-col sm:flex-row gap-16 mt-12">
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
                className={`relative min-h-[250px] md:h-[50vh] lg:h-[75vh] ${
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
