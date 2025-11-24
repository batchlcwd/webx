import React from "react";

function PrimaryButton({
  text = "Primary Default Text",
  type = "button",
  classes = "bg-orange-600 hover:bg-orange-500 text-white",
  clickFunction,
}) {
  function handleClick() {
    if (clickFunction) {
      clickFunction();
    }
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`px-3 py-1 rounded  cursor-pointer  transition-all duration-150 ${classes}`}
    >
      {text}
    </button>
  );
}

export default PrimaryButton;
