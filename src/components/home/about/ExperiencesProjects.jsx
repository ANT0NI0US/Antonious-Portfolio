import { motion } from "framer-motion";

const Information = [
  {
    title: "Years Of Experience",
    data: "2+",
  },
  {
    title: "Number Of Projects",
    data: "35+",
  },
  {
    title: "Technical Proficiency",
    data: "React - Next",
  },
];

export default function ExperiencesProjects() {
  return (
    <div className="mt-4 flex w-full flex-col items-center justify-between gap-8 text-center md:mt-8 md:flex-row">
      {Information.map(({ title, data }) => (
        <motion.div
          key={title}
          className="shadow-secondary border-secondary flex w-full flex-col items-center justify-center gap-1.5 rounded-4xl border-b-8 py-7 shadow-md md:min-h-[210px] md:p-4 lg:min-h-[170px]"
          initial={{ skew: "0" }}
          whileInView={{ skew: [0, 20, -20, 0] }}
          transition={{ duration: 3 }}
        >
          <span className="text-primary text-2xl font-bold lg:text-3xl">
            {data}
          </span>
          <span>{title}</span>
        </motion.div>
      ))}
    </div>
  );
}
