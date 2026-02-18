import { generateUsingAI } from "@/services/aiService";
import { NextResponse } from "next/server";

export async function POST(request, response) {
  const { title, short_description } = await request.json();

  const data = await generateUsingAI(title, short_description);

  //call ai to generate text
  //   console.log(process.env.OPEN_AI_KEY);
  return NextResponse.json(data);
}
