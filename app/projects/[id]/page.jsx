"use client";

import { useState, useEffect } from "react";

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
          return (
            <article
              key={i}
              className={`border-b-2 border-b-solid border-b-primary-color ${
                i % 2 === 0
                  ? "border-r-primary-color border-r-2 border-r-solid"
                  : "border-l-primary-color border-l-2 border-l-solid"
              } py-64 px-8`}
            >
              <div>
                <p>{stage.projectDetails}</p>
              </div>
              <div>img</div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Project;
