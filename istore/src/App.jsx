import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ViewProducts from "./components/ViewProducts";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <div className="p-10">
        <h1 className="text-3xl">Ecommerce Store</h1>
        <ViewProducts />
        <Counter />
      </div>
    </>
  );
}

export default App;
