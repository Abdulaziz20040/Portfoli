import { FaEnvelope, FaFolder, FaTools } from "react-icons/fa";
import { HiMiniUser } from "react-icons/hi2";
import { IoMdHome } from "react-icons/io";
import { Outlet, Link } from "react-router-dom";
import "../App.css";

const Rotlayout = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-10 mt-10 px-4">
      {/* Sidebar / Mobile Menu */}
      <div className="lg:flex flex-col gap-4 border border-spacing-1 border-stone-900 p-4 rounded-md shadow blur-container mobile-menu">
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

      {/* Main Content */}
      <main className="flex-1 hide-scrollbar w-full lg:w-[1150px] h-[80vh] mt-4 lg:mt-0">
        <Outlet />
      </main>
    </div>
  );
};

export default Rotlayout;
