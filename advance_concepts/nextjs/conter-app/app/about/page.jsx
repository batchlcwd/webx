"use client";
import Heading from "@/components/Heading";
import dynamic from "next/dynamic";

const TextComponent = dynamic(() => import("../../components/Text"), {
  ssr: false,
});

function About() {
  return (
    <div className="text-5xl p-10">
      <h1> About</h1>
      <Heading />
      <TextComponent />
    </div>
  );
}

export default About;
