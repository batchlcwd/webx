"use client";

import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  console.log("counter log");
  useEffect(() => {
    console.log("this is use effect");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-80 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Counter App</h1>

        <div className="text-6xl font-extrabold text-blue-600 mb-6 transition-all">
          {count}
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg text-lg font-semibold transition transform hover:scale-105"
          >
            −
          </button>

          <button
            onClick={() => setCount(0)}
            className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-lg text-sm font-semibold transition transform hover:scale-105"
          >
            Reset
          </button>

          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg text-lg font-semibold transition transform hover:scale-105"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
