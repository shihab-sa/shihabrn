// Sidebar.js

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, Gamepad2, Menu, X } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { TabletSmartphone } from "lucide-react";
import ShihabSidebar from "../assets/imeges/bgboss.jpg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}

      <button
        onClick={toggleSidebar}
        className="fixed top-0 right-0 z-50 md:hidden  text-white p-2 w-[100%] bg-gray-600"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`bg-black h-full text-white  fixed top-0 left-0 overflow-y-auto transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 z-40`}
      >
        <div className="p-4 flex flex-col h-full justify-between">
          <div>
            <div className="flex items-center gap-4 px-4 py-4 mt-10">
              <div className="avatar online">
                <div className="w-10 h-10 rounded-full ring ring-sky-600">
                  <img src={ShihabSidebar} alt="Avatar" />
                </div>
              </div>
              <div>
                <h1 className="text-xs font-bold">Shihab Ahmed</h1>
                <h1 className="text-xs">Software Engineer</h1>
              </div>
            </div>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-white hover:bg-gray-700 transition duration-300 ${
                      isActive ? "bg-gray-700" : ""
                    }`
                  }
                  onClick={toggleSidebar}
                >
                  <div className="flex items-center gap-4 font-bold">
                    <Home /> Home
                  </div>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-white hover:bg-gray-700 transition duration-300 ${
                      isActive ? "bg-gray-700" : ""
                    }`
                  }
                  onClick={toggleSidebar}
                >
                  <div className="flex items-center gap-4 font-bold">
                    <TabletSmartphone /> Apps
                  </div>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/games"
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-white hover:bg-gray-700 transition duration-300 ${
                      isActive ? "bg-gray-700" : ""
                    }`
                  }
                  onClick={toggleSidebar}
                >
                  <div className="flex items-center gap-4 font-bold">
                    <Gamepad2 /> Games
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink
            href="#"
            className="block px-4 py-4 rounded-xl text-white hover:bg-gray-700 transition duration-300"
            onClick={toggleSidebar}
          >
            <div className="flex items-center gap-4">
              <FaXTwitter size={30} />
              <h1 className="text-xl font-bold">Follow</h1>
            </div>
          </NavLink>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
