"use client";

import React from "react";
import { Button } from "./ui/button";
import toast from "react-hot-toast";
import axios from "axios";

function CorsTest() {
  async function handleLogin(event) {
    toast.success("button clicked");

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          email: "saurabh@gmail.com",
          password: "Abc@123",
        }
      );
      console.log(response);
      console.log(response.data);
      toast.success("Login success");
    } catch (error) {
      console.log(error);
      toast.error("Error in login");
    }
  }

  return (
    <div>
      <Button onClick={handleLogin}>Login in</Button>
    </div>
  );
}

export default CorsTest;
