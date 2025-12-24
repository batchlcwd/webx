import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/authSlice";
function Navbar() {
  const dispatch = useDispatch();
  return (
    <nav className="flex items-center justify-between bg-slate-900 p-4">
      <div>
        <h1 className="text-slate-100 text-2xl font-semibold">
          Substring Redux App
        </h1>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(
              login({
                name: "Rajiv",
                email: "rajiv@dev.in",
              })
            );
          }}
          className="bg-slate-800 py-2 px-4 rounded-md text-slate-100 hover:bg-slate-700"
        >
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
