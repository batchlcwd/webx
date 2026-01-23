import { NextResponse } from "next/server";

export async function GET() {
  const users = [
    {
      name: "abhishek",
      age: 20,
    },
    {
      name: "abhi",
      age: 21,
    },
  ];

  return NextResponse.json(users);
}
