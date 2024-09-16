import { useState } from "react";
import TextHead from "../../../ui/TextHead";
import { projects } from "../components/projects";
import Categories from "../components/Categories";
import FilteredProjects from "../components/FilteredProjects";
import ProjectDetails from "../components/ProjectDetails";
import Pagination from "../components/Pagination";

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
    <section className="min-h-screen w-full bg-main py-[100px]" id="projects">
      <div className="mx-auto w-[90%] space-y-5 md:w-5/6">
        {/* PROJECTS HEAD AND DEXCRIPTION */}
        <TextHead text="Projects" />
        <p className="text-center text-lg">
          Explore my website designs that are easy to use and look great , Enjoy
          a better online experience with simple and user-friendly interfaces.
        </p>

        {/* PROJECT CATEGORIES */}
        <Categories
          handleSelectNewCategory={handleSelectNewCategory}
          selectedCategory={selectedCategory}
        />

        {/* Display filtered project depened on the Category */}
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
