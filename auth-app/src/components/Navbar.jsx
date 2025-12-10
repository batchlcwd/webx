import React from "react";
import MyButton from "./MyButton";
import useAuthStore from "../store/auth";

function Navbar() {
  const { isAuthenticated, login, logout } = useAuthStore();
  const user = useAuthStore((state) => state.user);

  return (
    <div className="flex justify-around h-16 bg-gray-900 text-white items-center">
      {/* brand name */}
      <div className="flex items-center gap-2">
        <span className="inline-block w-6 h-6 rounded bg-linear-to-r text-center from-gray-600 to-gray-100">
          A
        </span>
        <span className="text-2xl font-semibold tracking-tight">Auth App</span>
      </div>
      {/* links */}
      <div className="flex gap-4 items-center">
        <a href="#!">{isAuthenticated ? user.name : "home"}</a>
        {isAuthenticated ? (
          <>
            <MyButton handleClick={logout} text="Logout" />
          </>
        ) : (
          <>
            <MyButton
              handleClick={() => {
                login({
                  name: "Komal",
                  email: "komal@gmail.com",
                });
              }}
              text="Login"
            />
            <MyButton text="Signup" />
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
