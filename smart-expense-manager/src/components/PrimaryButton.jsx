import React from "react";

function PrimaryButton({ text = "Primary Default Text", clickFunction }) {
  function handleClick() {
    if (clickFunction) {
      clickFunction();
    }
  }

  return (
    <button
      onClick={handleClick}
      className="bg-orange-600 text-white px-3 py-1 rounded-xl text-xl cursor-pointer hover:bg-orange-500 transition-all duration-150"
    >
      {text}
    </button>
  );
}

export default PrimaryButton;
