import React from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  const handleCopy = () => {
    navigator.clipboard.writeText("+998 77 014 50 47");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:frontenddevelopment17@gmail.com";
  };

  const handleInstagramClick = () => {
    window.open("https://instagram.com/yourprofile", "_blank");
  };

  const handleMapClick = () => {
    window.open(
      "https://www.google.com/maps/@41.326343,69.227857,15z",
      "_blank"
    );
  };

  const handleGithubClick = () => {
    window.open("https://github.com/AbdushukurovFrontend", "_blank");
  };

  return (
    <motion.div
      className=" rounded-xl text-white py-8 px-4 md:px-12"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title Section */}
      <div className=" text-white py-10 px-5 md:px-20 ">
        {/* Left Section */}
        <div className="grid md:grid-cols-2 relative   gap-10 h-[400px] ">
          <div>
            <h1 className="text-3xl md:text-5xl  font-bold mb-4">
              Join the <br /> Community
            </h1>
            <hr className=" mt-10" />
            <div className="  mt-4 flex items-center justify-between">
              <p className="text-gray-300 text-sm md:text-base mb-4">
                What's next? Check out our work!
              </p>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-600 font-semibold flex items-center"
              >
                Learn More <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Info */}
            <div className="space-y-4 md:space-y-6">
              {/* Phone */}
              <div
                className="cursor-pointer bacgrpund hover:bg-blue-600 rounded-lg p-3 flex items-center space-x-3"
                onClick={handleCopy}
              >
                <FaPhone className="text-blue-400 text-lg" />
                <span className="text-gray-200 text-sm md:text-base">
                  +998 77 014 50 47
                </span>
              </div>

              {/* Email */}
              <div
                className="cursor-pointer w-[340px] bacgrpund hover:bg-green-600 rounded-lg p-3 flex items-center space-x-3"
                onClick={handleEmailClick}
              >
                <FaEnvelope className="text-green-400 text-lg" />
                <span className="text-gray-200 text-sm md:text-base">
                  frontenddevelopment17@gmail.com
                </span>
              </div>

              {/* Instagram */}
              <div
                className="cursor-pointer bacgrpund hover:bg-pink-600 rounded-lg p-3 flex items-center space-x-3"
                onClick={handleInstagramClick}
              >
                <FaInstagram className="text-pink-400 text-lg" />
                <span className="text-gray-200 text-sm md:text-base">
                  {t("contact.Instagram")}
                </span>
              </div>

              {/* Map */}
              <div
                className="cursor-pointer bacgrpund hover:bg-gray-600 rounded-lg p-3 flex items-center space-x-3"
                onClick={handleMapClick}
              >
                <FaMapMarkerAlt className="text-red-400 text-lg" />
                <span className="text-gray-200 text-sm md:text-base">
                  {t("contact.map")}
                </span>
              </div>

              {/* Github */}
              <div
                className="cursor-pointer bacgrpund hover:bg-gray-600 rounded-lg p-3 flex items-center space-x-3"
                onClick={handleGithubClick}
              >
                <FaGithub className="text-gray-400 text-lg" />
                <span className="text-gray-200 text-sm md:text-base">
                  GitHub
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
    </motion.div>
  );
}

export default Contact;
