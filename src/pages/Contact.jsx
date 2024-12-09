import React from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
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
      className="bacgrpund rounded-xl text-white py-8 px-4 md:px-12"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title Section */}
      <div className="text-start md:text-left mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Menga Aloqa chiqish
        </h1>
        <p className="text-gray-200 text-sm md:text-base mt-2">
          Savollar, takliflar yoki ish biriktirish uchun bog'laning
        </p>
      </div>

      {/* Contact Section */}
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
            className="cursor-pointer bacgrpund hover:bg-green-600 rounded-lg p-3 flex items-center space-x-3"
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
              Instagram
            </span>
          </div>

          {/* Map */}
          <div
            className="cursor-pointer bacgrpund hover:bg-gray-600 rounded-lg p-3 flex items-center space-x-3"
            onClick={handleMapClick}
          >
            <FaMapMarkerAlt className="text-red-400 text-lg" />
            <span className="text-gray-200 text-sm md:text-base">
              Manzilga yo'naltirish
            </span>
          </div>

          {/* Github */}
          <div
            className="cursor-pointer bacgrpund hover:bg-gray-600 rounded-lg p-3 flex items-center space-x-3"
            onClick={handleGithubClick}
          >
            <FaGithub className="text-gray-400 text-lg" />
            <span className="text-gray-200 text-sm md:text-base">GitHub</span>
          </div>
        </div>

        {/* Message Section */}
        <div className="bg-gray-800 rounded-lg p-4 md:p-8 shadow-lg">
          <h2 className="text-lg md:text-2xl font-semibold mb-3 text-gray-200">
            Xabar Yuboring
          </h2>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Ismingiz"
              className="w-full p-2 rounded-md bacgrpund text-gray-200 focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded-md bacgrpund text-gray-200 focus:ring-2 focus:ring-green-400"
            />
            <textarea
              placeholder="Xabarni yozing..."
              className="w-full p-2 rounded-md bacgrpund text-gray-200 focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition"
            >
              Yuborish
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
