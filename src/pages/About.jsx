import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function About() {
  // Animatsiyalar uchun variantlar
  const animationVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const { t } = useTranslation();
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
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            {t("about.abouttitle")}
          </h1>
          <p className="mb-4 leading-relaxed text-sm md:text-base">
            {t("about.aboutdescription")}
          </p>

          <p className="mt-2 text-sm md:text-base">
            🔹 {t("about.age")}
            <br /> 🔹 {t("about.locate")}
            <br /> 🔹 {t("about.lan")}
          </p>

          <h2 className="text-lg md:text-2xl font-semibold mt-4 mb-2">
            {t("about.abouttitle2")}
          </h2>
          <p className="mb-4 leading-relaxed text-sm md:text-base">
            {t("about.aboutdesc2")}
          </p>

          <h2 className="text-lg md:text-2xl font-semibold mt-4 mb-2">
            {t("about.abouttitle3")}
          </h2>
          <ul className="list-disc ml-5 text-sm md:text-base">
            <li>{t("about.aboutdesc3")}</li>
            <li>{t("about.aboutdesc4")}</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
