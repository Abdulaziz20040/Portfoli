import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaPaintBrush, FaCss3Alt, FaCode } from "react-icons/fa";

function Home() {
  // Animatsiyaning boshlanishi va oxiri uchun variantlar
  const animationVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen px-6 md:px-8 lg:px-12">
      {/* Animated Heading */}
      <motion.h1
        className="text-lg md:text-xl lg:text-2xl font-bold max-w-[500px] mb-4"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={animationVariants}
        transition={{ duration: 1 }}
      >
        Salom! Men{" "}
        <span className="text-[rgb(240,86,200)] font-bold">Abdulaziz</span>.
        Frontend Developerman.
      </motion.h1>

      {/* Animated Paragraph 1 */}
      <motion.p
        className="mt-2 text-sm md:text-base lg:text-lg max-w-[700px]"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={animationVariants}
        transition={{ duration: 1, delay: 0.2 }}
      >
        React, TypeScript, Tailwind CSS, Next.js kabi zamonaviy texnologiyalar
        bilan ishlayman. Mening maqsadim intuitiv, samarali va chiroyli
        veb-saytlar yaratishdir.
      </motion.p>

      {/* Animated Paragraph 2 */}
      <motion.p
        className="mt-3 text-sm md:text-base lg:text-lg max-w-[700px]"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={animationVariants}
        transition={{ duration: 1, delay: 0.4 }}
      >
        1 Yil davomida turli loyihalarda ishlash orqali tajriba orttirdim va
        dizayn, kodlash, hamda foydalanuvchi tajribasini birinchi o'ringa
        qo'yaman.
      </motion.p>

      {/* Animated Grid of Skills */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={animationVariants}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {/* Skill 1 */}
        <motion.div className="p-4 md:p-6 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform">
          <div className="flex items-center gap-4">
            <FaReact className="text-4xl md:text-5xl" />
            <div className="flex-1 text-sm md:text-base lg:text-lg">
              ✅ React va Next.js asosida veb-saytlar yaratish
            </div>
          </div>
        </motion.div>

        {/* Skill 2 */}
        <motion.div className="p-4 md:p-6 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform">
          <div className="flex items-center gap-4">
            <FaPaintBrush className="text-4xl md:text-5xl" />
            <div className="flex-1 text-sm md:text-base lg:text-lg">
              ✅ Modern, intuitiv va responsiv dizaynlar
            </div>
          </div>
        </motion.div>

        {/* Skill 3 */}
        <motion.div className="p-4 md:p-6 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform">
          <div className="flex items-center gap-4">
            <FaCss3Alt className="text-4xl md:text-5xl" />
            <div className="flex-1 text-sm md:text-base lg:text-lg">
              ✅ Tailwind CSS bilan chiroyli va tezkor interfeyslar yaratish
            </div>
          </div>
        </motion.div>

        {/* Skill 4 */}
        <motion.div className="p-4 md:p-6 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform">
          <div className="flex items-center gap-4">
            <FaCode className="text-4xl md:text-5xl" />
            <div className="flex-1 text-sm md:text-base lg:text-lg">
              ✅ JavaScript va TypeScript bilan interaktivlik qo'shish
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
