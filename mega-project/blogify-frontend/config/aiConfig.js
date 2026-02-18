import OpenAI from "openai";

const openAIClient = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

export default openAIClient;
