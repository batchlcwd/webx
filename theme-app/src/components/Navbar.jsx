import React from "react";
import { useTheme } from "../context/theme/ThemeProvider";
import { CiSun } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";

function Navbar() {
  const { theme, setTheme } = useTheme();

  function handleChange() {
    setTheme(theme == "dark" ? "light" : "dark");
  }

  const classToAppy =
    theme == "dark"
      ? "bg-slate-800 text-slate-300"
      : "bg-slate-300 text-slate-800";

  return (
    <nav
      className={`flex transition-all duration-200 justify-around h-14 items-center ${classToAppy}`}
    >
      {/* brand div */}
      <div>
        <span className="text-2xl">Theme App</span>
      </div>

      <div className="flex gap-4 justify-center items-center">
        <a href="#!">Home</a>
        <a href="#!">
          {theme == "dark" ? <CiSun size={20} /> : <FaRegMoon size={20} />}
        </a>
        <button
          onClick={handleChange}
          className="bg-orange-700 text-white px-2 py-1 rounded cursor-pointer"
        >
          Change Theme
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
