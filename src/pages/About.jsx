import React from "react";
import { motion } from "framer-motion";

function About() {
  // Animatsiyalar uchun variantlar
  const animationVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen px-4 ">
      {/* Matn va rasm joylashuvi uchun asosiy konteyner */}
      <motion.div
        className="mx-auto px-4 flex flex-col lg:flex-row lg:gap-10 md:mt-4"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={animationVariants}
        transition={{ duration: 1 }}
      >
        {/* Matnli Qism */}
        <motion.div
          className="w-full lg:w-1/2 text-left"
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-4">About Me</h1>
          <p className="mb-4 leading-relaxed text-sm md:text-base">
            Salom! Men Abdulazizman, professional Frontend Developer. React,
            TypeScript, Tailwind CSS kabi zamonaviy texnologiyalar bilan
            ishlayman. Ma'lumotlar bazasi, UI/UX dizayn va veb-yechimlar
            yaratishda tajribam bor.
          </p>

          <p className="mt-2 text-sm md:text-base">
            🔹 Yoshim: 20 yosh <br /> 🔹 Yashash joyim: Toshkent, O‘zbekiston
            <br /> 🔹 Tillar: O'zbek tili
          </p>

          <h2 className="text-lg md:text-2xl font-semibold mt-4 mb-2">
            Maqsadim
          </h2>
          <p className="mb-4 leading-relaxed text-sm md:text-base">
            Mening maqsadim — intuitiv, samarali va foydalanuvchi uchun qulay
            veb-saytlar yaratish va tajribamni doimiy ravishda yaxshilash.
          </p>

          <h2 className="text-lg md:text-2xl font-semibold mt-4 mb-2">
            Ish Tajribasi
          </h2>
          <ul className="list-disc ml-5 text-sm md:text-base">
            <li>Frontend Developer | 1 yildan ortiq tajriba</li>
            <li>
              React, TypeScript va Next.js texnologiyalaridan foydalanib,
              intuitiv va interaktiv veb-loyihalarni yaratish
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
