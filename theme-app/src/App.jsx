import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import { ThemeProvider } from "./context/theme/ThemeProvider";

function App() {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <Profile />
      </ThemeProvider>
    </div>
  );
}

export default App;
