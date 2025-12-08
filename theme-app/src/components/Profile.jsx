import React from "react";
import { useTheme } from "../context/theme/ThemeProvider";

function Profile() {
  const { theme, setTheme } = useTheme();
  const classToAppy =
    theme == "dark"
      ? "bg-slate-900 text-slate-300"
      : "bg-slate-100 text-slate-800";

  return (
    <div
      className={`p-2 transition-all duration-200 h-screen flex flex-col  gap-2 items-center justify-center ${classToAppy}`}
    >
      <img
        className="w-60"
        src="https://learncodewithdurgesh.com/images/dev-illustration.svg"
        alt=""
      />
      <h1 className="text-2xl font-semibold">Substring Technologies</h1>
      <p className="text-slate-500">
        We provde India's number online trainings.
      </p>
      <p> Current Theme : {theme}</p>
    </div>
  );
}

export default Profile;
