import React, { memo } from "react";

const Button = memo(function Button({ value, handleButtonClicked }) {
  console.log("button rendered");
  return <button onClick={handleButtonClicked}>{value}</button>;
});

export default Button;
