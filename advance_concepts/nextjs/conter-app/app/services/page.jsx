import ServiceList from "@/components/ServiceList";
import React from "react";

function Services() {
  return (
    <div className="flex gap-4 flex-col py-10 justify-center items-center">
      <h1 className="text-3xl font-semibold">We provide the best services</h1>
      <p className="text-lg max-w-3xl text-gray-400">
        Our services page is designed to provide information about the services
        we offer. We are a company that specializes in providing high-quality
        services to our customers. Our services include web development, mobile
        app development, and software development. We also offer consulting
        services to help businesses improve their operations.
      </p>
      <div className="max-w-7xl">
        <ServiceList />
      </div>
    </div>
  );
}

export default Services;
