import { useState } from "react";
import { projects } from "../components/projects";
import Categories from "../components/Categories";
import FilteredProjects from "../components/FilteredProjects";
import ProjectDetails from "../components/ProjectDetails";
import Pagination from "../components/Pagination";
import TextHead from "@/ui/TextHead";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelectNewCategory = (newCategory) => {
    setSelectedCategory(newCategory);
    setSelectedProject(null);
    setCurrentIndex(0);
  };

  const handleSelectProjectDetails = (project, index) => {
    setSelectedProject(project);
    setCurrentIndex(index);
  };

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.type === selectedCategory);

  const handleClick = (direction) => {
    const newIndex =
      direction === "previous"
        ? Math.max(currentIndex - 1, 0)
        : Math.min(currentIndex + 1, filteredProjects?.length - 1);
    setSelectedProject(filteredProjects[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <section
      className="min-h-screen bg-main py-[40px] md:py-[100px]"
      id="projects"
    >
      <div className="container space-y-5 xl:space-y-8">
        {/* PROJECTS HEAD AND DESCRIPTION */}
        <TextHead text="Projects" />
        <p className="text-center text-lg xl:text-xl">
          Explore my website designs that are easy to use and look great , Enjoy
          a better online experience with simple and user-friendly interfaces.
        </p>

        {/* PROJECT CATEGORIES */}
        <Categories
          handleSelectNewCategory={handleSelectNewCategory}
          selectedCategory={selectedCategory}
        />

        {/* DISPLAY FILTERED PROJECT DEPEND ON THE CATEGORY */}
        {!selectedProject && (
          <FilteredProjects
            filteredProjects={filteredProjects}
            handleSelectProjectDetails={handleSelectProjectDetails}
          />
        )}

        {/* PROJECT DETAILS AND PAGINATION */}
        {selectedProject && (
          <>
            {/* CERTAIN DETAILS FOR PROJECT */}
            <ProjectDetails selectedProject={selectedProject} />

            {/* PAGINATION */}
            <Pagination
              handleClick={handleClick}
              currentIndex={currentIndex}
              filteredProjects={filteredProjects}
            />
          </>
        )}
      </div>
    </section>
  );
}
