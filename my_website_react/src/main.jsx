import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";
import App from "./App.jsx";

// const rootDiv = document.getElementById("root");

// const root = createRoot(rootDiv);

// root.render(<App />);
createRoot(document.getElementById("root")).render(<App />);
