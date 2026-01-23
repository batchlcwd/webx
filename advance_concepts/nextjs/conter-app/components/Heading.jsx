"use client";
import React, { useState } from "react";

function Heading() {
  const [heading, setHeading] = useState("Heading");

  console.log("this is heading");
  return <div>{heading}</div>;
}

export default Heading;
