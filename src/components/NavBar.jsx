import React from "react";
import { useNavigate } from "react-router-dom";
import { Glass } from "./Glass";

export function NavBar() {
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "about" },
    { name: "Services", path: "services" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <div className="flex flex-col md:flex-row md:items-center border-b border-green-400 pt-4">
      <div className="flex-grow text-5xl p-2 text-white font-extrabold">
        X-Foundation
      </div>
      <div className="flex py-4 px-12 gap-4 text-green-800">
        {navItems.map((item, idx) => (
          <Glass key={idx} glassClassName="rounded-md bg-white/75">
            <div
              className="cursor-pointer duration-300 px-4 py-2 font-extrabold text-white"
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </div>
          </Glass>
        ))}
      </div>
    </div>
  );
}
