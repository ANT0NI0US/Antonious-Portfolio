import { motion } from "framer-motion";
import TextHead from "@/ui/TextHead";
import { LuCalendarDays } from "react-icons/lu";

const experiences = [
  {
    year: "Oct 2023 - Feb 2025",
    title: "Smart Gate",
    experiences: [
      "Debugged and optimized React components, reducing page load time by 30%.",
      "Collaborated with UX/UI designers and backend developers to deliver features, boosting user satisfaction by 25%.",
      "Automated development workflows by creating reusable components and templates, cutting development time by 20%.",
      "Streamlined team coordination by implementing GitLab for version control and CI/CD pipelines, minimizing deployment errors by 15%.",
      "Integrated i18n for multilingual support, improving the Arabic-English user experience by 100%.",
    ],
  },
  // {
  //   year: "Mar 2025 - Present",
  //   title: "crēation ltd",
  //   experiences: ["Worked as a UI/UX Designer and improved user experience."],
  // },
];

// Variants for motion
const timelineVariants = {
  hidden: { height: 0 },
  visible: { height: "100%" },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const dotVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

export default function Experiences() {
  return (
    <section className="relative py-16" id="experiences">
      <div className="container">
        <TextHead text="Experiences" />

        <div className="relative mt-12 flex flex-col items-center">
          {/* Timeline line */}
          <motion.div
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="from-secondary to-primary absolute top-0 left-1/2 hidden w-[2px] -translate-x-1/2 bg-gradient-to-b md:block"
          />

          {/* Mobile Timeline Line */}
          <motion.div
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="from-secondary to-primary absolute top-0 left-5 block w-[2px] bg-gradient-to-b md:hidden"
          />

          <div className="flex w-full flex-col gap-16">
            {experiences.map(({ year, title, experiences }, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`relative flex w-full flex-col items-center md:flex-row md:items-start ${
                  idx % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Dot */}
                <motion.div
                  variants={dotVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.4, ease: "backOut" }}
                  className={`border-primary absolute top-5 left-2 z-10 flex h-6 w-6 items-center justify-center rounded-full border-4 bg-white md:right-auto md:left-1/2 md:-translate-x-1/2`}
                >
                  <div className="bg-primary h-3 w-3 rounded-full" />
                </motion.div>

                {/* Card */}
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  className="from-main to-secondary shadow-secondary xs:ml-8 xs:w-[85%] ml-10 flex w-[80%] flex-col rounded-md bg-gradient-to-tl from-55% to-100% p-6 shadow-md transition-all duration-300 hover:scale-[1.02] md:ml-0 md:w-[45%]"
                >
                  <div className="text-primary flex items-center justify-center gap-1.5 self-end text-sm">
                    <LuCalendarDays />
                    <span className="whitespace-nowrap">{year}</span>
                  </div>
                  <h3 className="text-light mt-2 text-xl font-bold">{title}</h3>
                  <ul className="list-inside list-decimal">
                    {experiences.map((exp, index) => (
                      <li key={index} className="text-light/70 mt-2">
                        {exp}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
