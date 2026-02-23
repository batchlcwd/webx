import { NextResponse } from "next/server";
import Razorpay from "razorpay";
export async function POST(request, response) {
  //fetching the amount body
  const { amount } = await request.json();
  console.log(amount);
  //razorpay ko bolna hai bhaiya mujhe:
  //amount = 20 ka payment accept karna hai.
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  const orderOptions = {
    amount: amount * 100,
    currency: "INR",
    receipt: "order_rcptid_11" + Math.floor(Math.random() * 1000),
    notes: {
      key1: "Payment for blog",
    },
  };

  //-->
  const order = await razorpay.orders.create(orderOptions);
  //order inforamtion database save:

  console.log(order);

  return NextResponse.json(order);
}
