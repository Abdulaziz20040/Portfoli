import React, { useState, useEffect } from "react";
import { FaEnvelope, FaFolder, FaTools } from "react-icons/fa";
import { HiMiniBars3, HiMiniUser } from "react-icons/hi2";
import { Outlet, Link } from "react-router-dom";
import { Drawer, Select } from "antd";
import "../App.css";
import { useTranslation } from "react-i18next";
import { FaCircleInfo } from "react-icons/fa6";
const { Option } = Select;

const Rotlayout = () => {
  const { t, i18n } = useTranslation();

  const [showMenuDrawer, setShowMenuDrawer] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setShowMenuDrawer(false);
  };

  return (
    <div className="container mt-5">
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 right-0 w-full shadow-md z-50 justify-between flex items-center p-4 ${
          isScrolled ? "backdrop-blur bg-white/10" : ""
        }`}
      >
        {/* Abdulaziz chap tomonda */}
        <div className="flex items-center">
          <Link to="/" className="text-lg font-semibold">
            <h3 className="gradient-text">{t("My.portfolio")}</h3>
          </Link>
        </div>

        {/* Ikonlar markazda */}
        <div className="hidden lg:flex gap-8 items-center mx-auto">
          <Link to="/" className="flex gap-2 items-center ">
            <HiMiniUser className=" text-gray-300" />
            <h3 className="gradient-text">{t("Rotlayout.name1")}</h3>
          </Link>
          <Link to="/about" className="flex items-center gap-2">
            <FaCircleInfo className=" text-gray-300" />
            <h3 className="gradient-text">{t("Rotlayout.name2")}</h3>
          </Link>
          <Link to="/projects" className="flex items-center gap-2">
            <FaFolder className=" text-gray-300" />
            <h3 className="gradient-text">{t("Rotlayout.name3")}</h3>
          </Link>
          <Link to="/skills" className="flex items-center gap-2">
            <FaTools className=" text-gray-300" />
            <h3 className="gradient-text">{t("Rotlayout.name4")}</h3>
          </Link>
          <Link to="/contact" className="flex items-center gap-2">
            <FaEnvelope className=" text-gray-300" />
            <h3 className="gradient-text">{t("Rotlayout.name5")}</h3>
          </Link>
        </div>

        {/* Select dropdown o'ng tomonda - faqat katta ekranlarda */}
        <div className="hidden lg:block">
          <Select
            onChange={(value) => i18n.changeLanguage(value)}
            defaultValue="uz"
            style={{ width: 120 }}
          >
            <Option value="uz">{t("Rotlayout.uzb")}</Option>
            <Option value="en">{t("Rotlayout.eng")}</Option>
            <Option value="ru">{t("Rotlayout.rus")}</Option>
          </Select>
        </div>

        {/* Bars Icon - kichik ekranlar uchun */}
        <button
          className="lg:hidden text-xl ml-auto"
          onClick={() => setShowMenuDrawer(true)}
        >
          <HiMiniBars3 />
        </button>
      </div>

      {/* Drawer - kichik ekranlar uchun */}
      <Drawer
        title="My.portfolio"
        placement="right"
        onClose={() => setShowMenuDrawer(false)}
        open={showMenuDrawer}
        width={240}
        closable={false} // Remove the default close (X) button
        style={{
          borderRadius: "20px 0px 0px 20px",
          backgroundColor: "#333333",
          color: "#ffffff",
        }}
      >
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex gap-2 items-center ">
            <HiMiniUser className=" text-gray-300" />
            <h3 className="gradient-text">{t("Rotlayout.name1")}</h3>
          </Link>
          <Link to="/about" className="flex items-center gap-2">
            <FaCircleInfo className=" text-gray-300" />
            <h3 className="gradient-text">{t("Rotlayout.name2")}</h3>
          </Link>
          <Link to="/projects" className="flex items-center gap-2">
            <FaFolder className=" text-gray-300" />
            <h3 className="gradient-text">{t("Rotlayout.name3")}</h3>
          </Link>
          <Link to="/skills" className="flex items-center gap-2">
            <FaTools className=" text-gray-300" />
            <h3 className="gradient-text">{t("Rotlayout.name4")}</h3>
          </Link>
          <Link to="/contact" className="flex items-center gap-2">
            <FaEnvelope className=" text-gray-300" />
            <h3 className="gradient-text">{t("Rotlayout.name5")}</h3>
          </Link>
          <Select
            onChange={(value) => i18n.changeLanguage(value)}
            defaultValue="uz"
            className="custom-select focus:outline-none" // className ni qo'shish
            style={{ width: 120, marginBottom: "1rem" }}
          >
            <Option value="uz">{t("Rotlayout.uzb")}</Option>
            <Option value="en">{t("Rotlayout.eng")}</Option>
            <Option value="ru">{t("Rotlayout.rus")}</Option>
          </Select>
        </div>
      </Drawer>

      {/* Asosiy kontent */}
      <main className=" w-full p-3 mt-24">
        <Outlet />
      </main>
    </div>
  );
};

export default Rotlayout;
