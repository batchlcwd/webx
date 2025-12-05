import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ViewProducts from "./components/ViewProducts";
import Counter from "./components/Counter";
import UseRefExample from "./components/UseRefExample";
import useCounter from "./hooks/useCounter";
import useFetch from "./hooks/useFetch";

function App() {
  const { count, increment, decrement, reset } = useCounter(15);
  const ob = useCounter(0);
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  return (
    <>
      <div className="p-10">
        <h1 className="text-3xl">Ecommerce Store</h1>
        <ViewProducts />
        <Counter />
        <UseRefExample />

        <div className="border p-4">
          <p>Count : {count}</p>
          <button
            onClick={increment}
            className="border rounded p-2 cursor-pointer ml-3"
          >
            +
          </button>
          <button
            onClick={decrement}
            className="border rounded p-2 cursor-pointer ml-3"
          >
            -
          </button>
        </div>
        <div className="border p-4">
          <p>Count : {ob.count}</p>
          <button
            onClick={ob.increment}
            className="border rounded p-2 cursor-pointer ml-3"
          >
            +
          </button>
          <button
            onClick={ob.decrement}
            className="border rounded p-2 cursor-pointer ml-3"
          >
            -
          </button>
        </div>
        <div className="mt-2">
          <div>data : {JSON.stringify(data)}</div>
          <div>Loading: {loading ? "loading is true" : "loading is false"}</div>
          <div>Error: {JSON.stringify(error)}</div>
        </div>
      </div>
    </>
  );
}

export default App;
