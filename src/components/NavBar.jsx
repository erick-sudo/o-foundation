import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Glass } from "./Glass";

export function NavBar() {
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const { pathname } = useLocation();

  return (
    <div className="flex flex-col md:flex-row md:items-center border-b border-green-700 pt-4">
      <h2 className="flex-grow text-4xl lg:text-5xl p-2 text-white font-extrabold">
        OA-Foundation
      </h2>
      <div className="flex py-4 px-12 gap-4 text-green-800 text-xs">
        {navItems.map((item, idx) => (
          <Glass
            onClick={() => navigate(item.path)}
            className={`${
              pathname === item.path ? "ring-1 ring-green-700" : ""
            } px-4 py-2`}
            key={idx}
            glassClassName="bg-white/75 peer-hover:bg-green-800/75 peer-hover:ring-1 peer-hover:ring-white bg-white/75 duration-300"
          >
            <span className="cursor-pointer duration-300 font-extrabold text-white">
              {item.name}
            </span>
          </Glass>
        ))}
      </div>
    </div>
  );
}
