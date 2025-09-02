import { motion } from "framer-motion";
import GridContainer from "@/ui/GridContainer";

export default function FilteredProjects({
  handleSelectProjectDetails,
  filteredProjects,
}) {
  return (
    <GridContainer>
      {filteredProjects?.map((project, index) => (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          key={project.title}
          className="shadow-secondary hover:shadow-primary flex cursor-pointer flex-col rounded-md shadow-md drop-shadow-lg transition-all duration-200 hover:shadow-lg hover:drop-shadow-lg"
          onClick={() => handleSelectProjectDetails(project, index)}
        >
          <img
            loading="lazy"
            src={project.imgUrl}
            alt={project.title}
            className="grow rounded-tl-md rounded-tr-md object-cover object-center"
          />
          <p className="my-3 text-center text-lg font-bold uppercase xl:text-xl">
            {project.title}
          </p>
        </motion.div>
      ))}
    </GridContainer>
  );
}
