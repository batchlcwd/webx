"use client";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { apiClient } from "@/config/axiosConfig";
import axios from "axios";
import toast from "react-hot-toast";

function PayBlog({ user_id, post_id }) {
  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  //inititate payment
  async function initiatePayment(amount, user_id, post_id) {
    debugger;
    console.log(amount);

    const response = await axios.post("/api/payment/initiate", { amount });
    console.log(response.data);
    handlePayment(response.data);
  }

  //handle payment function
  const handlePayment = (order) => {
    if (!window.Razorpay) {
      toast.error("Razorpay SDK failed to load");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Blogify User",
      description: "Payment for article reading",
      image:
        "https://www.substringtechnologies.com/_next/static/media/substring_logo.e4bf633e.png",
      order_id: order.id,

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
        toast.success("payment successfull");
        confirmPayment({
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
          user_id: user_id,
          post_id: post_id,
        });
      },

      prefill: {
        name: "Blogify User",
        email: "blogify@gmail.com",
        contact: "9999999999",
      },

      notes: {
        address: "Razorpay Corporate Office",
      },

      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);

    rzp.on("payment.failed", function (response) {
      toast.error(response.error.description);
    });

    rzp.open();
  };

  async function confirmPayment(data) {
    const response = await axios.post("/api/payment/confirm", data);
    console.log(response.data);
    toast.success("payment successfull");
  }

  return (
    <div>
      <Button
        type={"button"}
        onClick={() => initiatePayment(20)}
        className={"cursor-pointer"}
        variant="destructive"
      >
        Pay Rs 20, to read this article
      </Button>
    </div>
  );
}

export default PayBlog;
