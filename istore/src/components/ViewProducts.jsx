import React, { useState, useEffect } from "react";

function ViewProducts() {
  const [products, setProducts] = useState([
    {
      title: "Iphone 17",
      description: "This is one of the most best phone for camera.",
      price: 150000,
    },
    {
      title: "Iphone 16",
      description: "This is one of the most best phone for camera.",
      price: 120000,
    },
  ]);

  //   useEffect(() => {
  //     console.log("mounting view product cmp product list " + products.length);
  //     const timer = setInterval(() => console.log("running"), 1000);

  //     return () => {
  //       console.log("view products cleanup");
  //       clearInterval(timer);
  //     };
  //   }, [products]);

  return (
    <div>
      <h1>Product list : {products.length} </h1>

      {products.map((product) => {
        return (
          <div
            className="mt-2  w-1/3 p-3 rounded bg-slate-200 shadow"
            key={product.title}
          >
            <h1 className="font-semibold">{product.title}</h1>
            <p className="font-light">{product.description}</p>
          </div>
        );
      })}

      <button
        onClick={() => {
          setProducts([
            ...products,
            {
              title: "Iphone 16",
              description: "This is one of the most best phone for camera.",
              price: 120000,
            },
          ]);
        }}
        className="mt-2 px-3 py-1 bg-orange-500  rounded text-white cursor-pointer"
      >
        Add More products
      </button>
    </div>
  );
}

export default ViewProducts;
