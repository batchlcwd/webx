import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/counter/actions";
import { login, logout } from "../redux/auth/authSlice";
const Action = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => {
          dispatch(increment());
        }}
        className="cursor-pointer bg-slate-800 py-2 px-4 rounded-md"
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
        className="cursor-pointer bg-slate-800 py-2 px-4 rounded-md"
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
        className="cursor-pointer bg-slate-800 py-2 px-4 rounded-md"
      >
        Reset
      </button>

      <button
        onClick={() => {
          dispatch(
            login({
              name: "Saurabh",
              email: "srb@dev.in",
            })
          );
        }}
        className="cursor-pointer bg-slate-800 py-2 px-4 rounded-md"
      >
        Login
      </button>

      <button
        onClick={() => {
          dispatch(logout());
        }}
        className="cursor-pointer bg-slate-800 py-2 px-4 rounded-md"
      >
        Logout
      </button>
    </div>
  );
};

export default Action;
