import React from "react";
import MyButton from "./MyButton";
import useAuthStore from "../store/auth";
import { NavLink } from "react-router";
import { useState } from "react";
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full  top-0 left-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand */}
        <a
          href="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
        >
          AuthVerse
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-200 font-medium">
          <li>
            <NavLink to={"/"} className="hover:text-cyan-400 transition">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"} className="hover:text-cyan-400 transition">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"/login"} className="hover:text-purple-400 transition">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/register"}
              href="/signup"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 transition text-white"
            >
              Sign Up
            </NavLink>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-200 text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/70 backdrop-blur-lg border-t border-white/10">
          <ul className="flex flex-col text-gray-200 text-center py-6 space-y-6">
            <li>
              <a
                href="/"
                className="hover:text-cyan-400 transition"
                onClick={() => setOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-cyan-400 transition"
                onClick={() => setOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="hover:text-purple-400 transition"
                onClick={() => setOpen(false)}
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/signup"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 transition text-white inline-block mx-auto w-32"
                onClick={() => setOpen(false)}
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
