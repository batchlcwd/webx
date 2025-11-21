import { useState, useEffect } from "react";

export default function Courses() {
  // jo bhi function useXYZ usko bholenge wo hook kahlata hai...
  console.log("courses component");
  const [heading, setHeading] = useState("Course are here ...");

  const [courses, setCourses] = useState([
    {
      title: "Django",
    },
  ]);

  function handleHeadingChange() {
    setHeading("Courses list ");
    // setCourses([...courses, { title: "react js" }, { title: "spring boot" }]);
    // console.log(courses); //why?1
    setCourses((prev) => {
      //logic ????
      const updateState = [
        ...prev,
        { title: "react js" },
        { title: "spring boot" },
      ];

      console.log(updateState);

      return updateState;
    });

    // console.log(updateState);

    // console.log(courses);
  }

  return (
    <div className="border p-10">
      <h1>
        {heading} - {courses.length}
      </h1>

      {courses.map((c) => (
        <h1>{c.title}</h1>
      ))}

      <button
        onClick={handleHeadingChange}
        className="bg-gray-900 text-white px-2 py-1 rounded mt-3 cursor-pointer"
      >
        Change Heading
      </button>
    </div>
  );
}
