import React from "react";
import { Button } from "./ui/button";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between">
        <div className="flex items-center">
          <span className="font-semibold text-xl">Shivag Store</span>
        </div>
        <div className="flex items-center space-x-6">
          <NavLink to={"/"} className="text-blue-500 hover:text-blue-700">
            Home
          </NavLink>
          <NavLink
            to={"/products"}
            className="text-blue-500 hover:text-blue-700"
          >
            Products
          </NavLink>
          <NavLink to={"/about"} className="text-blue-500 hover:text-blue-700">
            About
          </NavLink>
          <div className="flex gap-2">
            <NavLink to={"/login"}>
              <Button variant="outline">Login</Button>
            </NavLink>
            <NavLink to={"/signup"}>
              <Button variant="outline">Sign Up</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
