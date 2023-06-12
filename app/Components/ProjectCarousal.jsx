"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { increaseIndex, decreaseIndex } from "../utils/utils";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const ProjectCarousal = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("/api/projects");
      const data = await res.json();
      if (data) {
        const featuredProjects = data.filter((project) => {
          return project.projectTimeline !== false;
        });
        setFeaturedProjects(featuredProjects);
        setCurrentProject(featuredProjects[0]);
        setIsLoading(false);
      } else {
        throw new Error();
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex(increaseIndex(index, featuredProjects));
      return setCurrentProject(featuredProjects[index]);
    }, 10000);

    return () => clearTimeout(timer);
  }, [index, featuredProjects]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <article className="relative grid grid-cols-[minmax(50px,_100px)_5fr_minmax(50px,_100px)] grid-rows-[minmax(50px,_100px)_2fr_minmax(50px,_100px)] w-screen h-screen isolate">
      <div className="absolute left-0 top-0 flex items-center h-full w-[50px] z-50 text-primary-color text-6xl">
        {<BsChevronLeft />}
      </div>
      {featuredProjects.map((project, i) => {
        let sliderPosition = "next";
        if (project.id === currentProject.id) {
          sliderPosition = "current";
        }
        if (
          project.id === currentProject.id - 1 ||
          (currentProject.id === 1 && project.id === featuredProjects.length)
        ) {
          sliderPosition = "previous";
        }
        return (
          <div
            key={i}
            className={`relative col-span-3 lg:col-start-2 lg:col-span-1 row-start-2 w-full h-full z-10 opacity-0 ${sliderPosition} transition-all duration-1000 ease-in-out text-white`}
          >
            <Image
              src={project.afterImg}
              alt={project.projectName}
              fill
              className="object-cover object-center"
            />
            <div className="absolute bottom-0 left-0 w-full pb-8 px-8 pt-16 bg-gradient-to-b from-[transparent] to-bg-gradient-dark to-10% z-10">
              <h5 className="mb-8">{project.projectName}</h5>
              <p className="max-w-[80ch] mb-4">{project.shortDescription}</p>
              <div>
                <button className="btn btn__primary">
                  <Link href={`/projects/${project.id}`}>
                    View Project Details
                  </Link>
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div className="absolute right-0 top-0 flex items-center h-full w-[50px] z-50 text-primary-color text-6xl">
        {<BsChevronRight />}
      </div>
    </article>
  );
};

export default ProjectCarousal;
