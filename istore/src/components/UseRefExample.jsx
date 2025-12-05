import React, { useRef, useState } from "react";

function UseRefExample() {
  const [ex, setEx] = useState(45);

  const inputRef = useRef(null);

  console.log("rendering use ref example component");

  return (
    <div className="mt-4">
      <input
        ref={inputRef}
        type="text"
        className="border rounded p-2"
        placeholder="Enter value here"
      />
      <h1 className="text-2xl font-semibold">useRef hooks example</h1>
      {ex}
      <br />
      <button
        className="border px-2 py-1 rounded mt-3"
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Change
      </button>
    </div>
  );
}

export default UseRefExample;
