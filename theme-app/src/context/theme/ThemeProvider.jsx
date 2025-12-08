//provider component

import { useContext, useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

export function ThemeProvider({ children }) {
  //global state wala variable
  const [theme, setTheme] = useState("light");
  const [firstTime, setFirstTime] = useState(true);
  useEffect(() => {
    if (firstTime) {
      //get the theme from localstorage
      const currentTheme = localStorage.getItem("theme");
      setTheme(currentTheme); 
      setFirstTime(false);
    } else {
      //set the to local storage
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

//usage

// <ThemeProvider>
//   <Com1>
//     <profile />
//   </Com1>
// </ThemeProvider>; //hi

export const useTheme = () => useContext(ThemeContext);
