"use client";
import useFetch from "@/hooks/useFetch";
import React, { useEffect, useState } from "react";

function ServiceList() {
  const [services, setServices] = useState();
  const { data, loading, error } = useFetch("/api/services");

  
  if (loading) {
    return <h1 className="p-10 text-center text-3xl">Loading...</h1>;
  }
  if (error) {
    return <h1 className="p-10 text-center text-3xl">{error}</h1>;
  }
  //   useEffect(() => {
  //     fetch("/api/services")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setServices(data);
  //       })
  //       .catch((err) => console.log(err));
  //   }, []);

  return (
    <div className="flex gap-4 mt-10 px-4 flex-wrap">
      {data &&
        data.map((service, index) => (
          <div
            className="w-full md:w-[48%] xl:w-[24%] flex flex-col gap-3 p-4 rounded-xl bg-gray-800"
            key={index}
          >
            <h2>{service?.name}</h2>
            <p>{service?.description}</p>
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => alert(`Explore ${service.name}`)}
              >
                Explore
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ServiceList;
