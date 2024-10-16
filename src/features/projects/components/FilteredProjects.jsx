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
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          key={project.title}
          className="cursor-pointer rounded-md shadow-md shadow-secondary drop-shadow-lg transition-all duration-200 hover:shadow-lg hover:shadow-orange hover:drop-shadow-lg"
          onClick={() => handleSelectProjectDetails(project, index)}
        >
          <img
            loading="lazy"
            src={project.imgUrl}
            alt={project.title}
            className="rounded-tl-md rounded-tr-md object-contain object-center"
          />
          <p className="my-3 text-center text-lg font-bold">{project.title}</p>
        </motion.div>
      ))}
    </GridContainer>
  );
}
