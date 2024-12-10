import React, { useState, useEffect } from "react";
import { SiGithub } from "react-icons/si";
import { motion } from "framer-motion";

// MyProjects komponenti
function MyProjects() {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("https://1a9b61689ee9a631.mokky.dev/portfolia")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("API dan xatolik:", error));
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < projects.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : projects.length - 1
    );
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="w-full flex justify-center items-center">
      {/* Bosh konteyner */}
      <motion.div
        className="flex flex-col lg:flex-row lg:gap-8 md:gap-6 w-full h-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Chap tomonda info */}
        <motion.div
          className="w-full md:w-1/2 lg:w-[400px] p-4 shadow-md rounded-lg"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {projects.length > 0 ? (
            <div>
              {/* ID chiqishi */}
              <p className="text-2xl md:text-3xl font-bold mb-2 text-blue-700">
                0{projects[currentIndex]?.id}
              </p>

              {/* Loyihaning nomi */}
              <h2 className="text-lg md:text-xl font-bold mb-4">
                {projects[currentIndex]?.name || "N/A"}
              </h2>

              {/* Loyihaning tavsifi */}
              <p className="text-sm md:text-base mb-4">
                {projects[currentIndex]?.desc || "N/A"}
              </p>

              {/* Texnologiyalar */}
              <h2 className="text-sm md:text-base font-semibold mb-4">
                {projects[currentIndex]?.stls || "N/A"}
              </h2>

              <hr className="mb-4" />

              {/* View Project */}
              <div className="flex items-center gap-4 mt-2">
                <a
                  href={projects[currentIndex]?.vercel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline text-sm"
                >
                  View Project
                </a>
                <a
                  href={projects[currentIndex]?.github}
                  className="text-gray-700 hover:text-blue-500 text-sm"
                >
                  <SiGithub />
                </a>
              </div>
            </div>
          ) : (
            <p className="text-sm md:text-base text-gray-600">Loading...</p>
          )}
        </motion.div>

        {/* O'ng tomonda tasvir va slider */}
        <motion.div
          className="relative w-full md:w-1/2 lg:w-1/2 shadow-md rounded-lg bg-white h-64 md:h-[500px]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {projects.length > 0 ? (
            <>
              {/* Tasvir va slider */}
              <div className="relative w-full h-full">
                <img
                  src={
                    projects[currentIndex]?.img ||
                    "https://via.placeholder.com/350"
                  }
                  alt={projects[currentIndex]?.name || "No image"}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Oldinga tugmasi */}
              <button
                className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-lg md:text-3xl text-white bg-blue-600 p-2 md:p-3 rounded-full hover:bg-blue-700 transition"
                onClick={handlePrev}
              >
                &#10094;
              </button>

              {/* Keyingi tugmasi */}
              <button
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-lg md:text-3xl text-white bg-blue-600 p-2 md:p-3 rounded-full hover:bg-blue-700 transition"
                onClick={handleNext}
              >
                &#10095;
              </button>
            </>
          ) : (
            <p className="text-lg md:text-base text-gray-600">Loading...</p>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default MyProjects;
