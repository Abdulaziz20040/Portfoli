import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiChakraui,
  SiAntdesign,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiSass,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-500 text-[60px]" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400 text-[60px]" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-500 text-[60px]" />,
  },
  { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-[60px]" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400 text-[60px]" /> },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="text-purple-500 text-[60px]" />,
  },
  {
    name: "Chakra UI",
    icon: <SiChakraui className="text-green-400 text-[60px]" />,
  },
  { name: "Figma", icon: <FaFigma className="text-pink-600 text-[60px]" /> },
  {
    name: "Ant Design",
    icon: <SiAntdesign className="text-red-500 text-[60px]" />,
  },
  { name: "Next.js", icon: <SiNextdotjs className="text-black text-[60px]" /> },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600 text-[60px]" />,
  },
  { name: "Git", icon: <FaGitAlt className="text-orange-500 text-[60px]" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-600 text-[60px]" /> },
  { name: "SCSS", icon: <SiSass className="text-pink-500 text-[60px]" /> },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function MySkills() {
  return (
    <motion.div
      className="text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Grid container with responsive breakpoints */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-8 mt-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative bacgrpund flex items-center justify-center w-[130px] h-[140px] shadow-lg rounded-lg hover:shadow-xl transition-shadow group"
            variants={itemVariants}
          >
            {/* Skill Icon */}
            {skill.icon}

            {/* Skill Name */}
            <div className="absolute top-[100%] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="bg-black text-white text-xs font-semibold py-1 px-2 rounded-md shadow">
                {skill.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default MySkills;
