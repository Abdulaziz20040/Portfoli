import React, { useState } from "react";
import { FaEllipsisV, FaEnvelope, FaFolder, FaTools } from "react-icons/fa";
import { HiMiniBars3, HiMiniUser } from "react-icons/hi2";
import { IoMdHome } from "react-icons/io";
import { Outlet, Link } from "react-router-dom";
import { Drawer } from "antd"; // Ant Design Drawer import
import "../App.css";

const Rotlayout = () => {
  const [showMenuDrawer, setShowMenuDrawer] = useState(false);

  // Function to handle link clicks and close the Drawer
  const handleMenuClick = () => {
    setShowMenuDrawer(false);
  };

  return (
    <div className="flex flex-col lg:flex-row container mt-5">
      {/* Sidebar for large screens */}
      <div className="hidden lg:flex shadow-lg p-4  h-[300px]">
        <div className="flex flex-col gap-4 bacgrpund p-4 rounded-xl">
          <Link to="/" className="flex gap-2 items-center">
            <IoMdHome />
            Home
          </Link>
          <Link to="/about" className="flex items-center gap-2">
            <HiMiniUser />
            About
          </Link>
          <Link to="/projects" className="flex items-center gap-2">
            <FaFolder />
            My Projects
          </Link>
          <Link to="/skills" className="flex items-center gap-2">
            <FaTools />
            My Skills
          </Link>
          <Link to="/contact" className="flex items-center gap-2">
            <FaEnvelope />
            Contact
          </Link>
        </div>
      </div>

      {/* Drawer for small screens */}
      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        onClose={() => setShowMenuDrawer(false)}
        open={showMenuDrawer}
        width={240}
        className=""
        style={{
          borderRadius: "20px 0px 0px 20px",
        }}
      >
        <div className="flex flex-col gap-4">
          <Link
            to="/"
            className="flex gap-2 items-center"
            onClick={handleMenuClick}
          >
            <IoMdHome />
            Home
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2"
            onClick={handleMenuClick}
          >
            <HiMiniUser />
            About
          </Link>
          <Link
            to="/projects"
            className="flex items-center gap-2"
            onClick={handleMenuClick}
          >
            <FaFolder />
            My Projects
          </Link>
          <Link
            to="/skills"
            className="flex items-center gap-2"
            onClick={handleMenuClick}
          >
            <FaTools />
            My Skills
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-2"
            onClick={handleMenuClick}
          >
            <FaEnvelope />
            Contact
          </Link>
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
        <HiMiniBars3 />
      </button>
    </div>
  );
};

export default Rotlayout;
