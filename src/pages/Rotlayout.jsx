import React, { useState } from "react";
import { FaEnvelope, FaFolder, FaTools } from "react-icons/fa";
import { HiMiniBars3, HiMiniUser } from "react-icons/hi2";
import { IoMdHome } from "react-icons/io";
import { Outlet, Link } from "react-router-dom";
import { Drawer, Select } from "antd";
import "../App.css";
import { useTranslation } from "react-i18next";
const { Option } = Select;

const Rotlayout = () => {
  const { t, i18n } = useTranslation();

  const [showMenuDrawer, setShowMenuDrawer] = useState(false);

  const handleMenuClick = () => {
    setShowMenuDrawer(false);
  };

  const handleClick = () => {
    window.open("https://t.me/My_Projectc", "_blank");
  };

  return (
    <div className="flex flex-col lg:flex-row container mt-5">
      {/* Sidebar for large screens */}
      <div className="hidden lg:flex shadow-lg p-4  h-[300px]">
        <div className="flex flex-col gap-4 bacgrpund p-4 rounded-xl">
          <Link to="/" className="flex gap-2 items-center">
            <IoMdHome />
            {t("Rotlayout.name1")}
          </Link>
          <Link to="/about" className="flex items-center gap-2">
            <HiMiniUser />
            {t("Rotlayout.name2")}
          </Link>
          <button className="flex items-center gap-2" onClick={handleClick}>
            <FaFolder />
            {t("Rotlayout.name3")}
          </button>
          <Link to="/skills" className="flex items-center gap-2">
            <FaTools />
            {t("Rotlayout.name4")}
          </Link>
          <Link to="/contact" className="flex items-center gap-2">
            <FaEnvelope />
            {t("Rotlayout.name5")}
          </Link>
          <Select
            onChange={(value) => i18n.changeLanguage(value)} // tuzatilgan joy
            defaultValue="uz"
            style={{ width: 120, marginBottom: "1rem" }}
          >
            <Option value="uz">{t("Rotlayout.uzb")}</Option>
            <Option value="en">{t("Rotlayout.eng")}</Option>
            <Option value="ru">{t("Rotlayout.rus")}</Option>
          </Select>
        </div>
      </div>

      {/* Drawer for small screens */}
      <Drawer
        title="Menu"
        placement="right"
        closable={false} // Remove the default close (X) button
        onClose={() => setShowMenuDrawer(false)}
        open={showMenuDrawer}
        width={240}
        style={{
          borderRadius: "20px 0px 0px 20px",
          backgroundColor: "#333333",
          color: "#ffffff",
        }}
      >
        <div className="flex flex-col gap-4">
          <Link
            to="/"
            className="flex gap-2 items-center"
            onClick={handleMenuClick}
          >
            <IoMdHome />
            {t("Rotlayout.name1")}
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2"
            onClick={handleMenuClick}
          >
            <HiMiniUser />
            {t("Rotlayout.name2")}
          </Link>
          <button className="flex items-center gap-2" onClick={handleClick}>
            <FaFolder />
            {t("Rotlayout.name3")}
          </button>
          <Link
            to="/skills"
            className="flex items-center gap-2"
            onClick={handleMenuClick}
          >
            <FaTools />
            {t("Rotlayout.name4")}
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-2"
            onClick={handleMenuClick}
          >
            <FaEnvelope />
            {t("Rotlayout.name5")}
          </Link>
          <Select
            onChange={(value) => i18n.changeLanguage(value)} // tuzatilgan joy
            defaultValue="uz"
            style={{ width: 120, marginBottom: "1rem" }}
          >
            <Option value="uz">{t("Rotlayout.uzb")}</Option>
            <Option value="en">{t("Rotlayout.eng")}</Option>
            <Option value="ru">{t("Rotlayout.rus")}</Option>
          </Select>
        </div>
      </Drawer>

      {/* Main Content */}
      <main className="flex-1 hide-scrollbar w-full p-3">
        <Outlet />
      </main>

      {/* Dots Icon Button for small screens */}
      <button
        className="lg:hidden fixed top-7 right-4 z-20 text-white p-2 rounded-md"
        onClick={() => setShowMenuDrawer(true)}
      >
        <HiMiniBars3 className=" text-[19px]" />
      </button>
    </div>
  );
};

export default Rotlayout;
