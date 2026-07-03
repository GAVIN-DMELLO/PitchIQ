
import OpenAI from "openai";

console.log(process.env.GROQ_API_KEY)

export default async function storeData(playerData){
  const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
  });

  console.log(process.env.GROQ_API_KEY)

  const response = await client.responses.create({
      model: "openai/gpt-oss-20b",
      input: "Explain the importance of fast language models",
  });
  console.log(response.output_text);
  return response.output_text;
}

