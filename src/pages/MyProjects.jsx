import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import axios from "axios";

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

function MyProjects() {
  const [projects, setProjects] = useState([]); // Initialize as an empty array

  useEffect(() => {
    axios
      .get("https://1a9b61689ee9a631.mokky.dev/portfolia")
      .then((res) => {
        const filterdata = res.data.filter((item) => item.toppost === toppost);
      })
      .catch((e) => {
        console.error(e);
        alert("Failed to fetch projects");
      });
  }, []); // Ensure the effect only runs once
  return (
    <motion.div
      className="text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className=" flex justify-between items-center">
        <h1>Top projects</h1>
        <h1>All projects</h1>
      </div>
      {/* Grid container with responsive breakpoints */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-8 mt-10">
        {projects.map((skill, index) => (
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

export default MyProjects;
