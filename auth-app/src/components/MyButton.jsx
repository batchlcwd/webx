import React from "react";

function MyButton({ text = "click me", handleClick = () => {} }) {
  return (
    <button
      onClick={handleClick}
      className="bg-white text-black px-2 py-1 rounded cursor-pointer"
    >
      {text}
    </button>
  );
}

export default MyButton;
