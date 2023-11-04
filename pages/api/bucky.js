import { mockSavingsInfo } from "../../constants/data";

const OpenAI = require("openai");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  let { savingsInfo } = req.body;

  // If savingsInfo is not provided or is an empty object, use mock data
  if (!savingsInfo || Object.keys(savingsInfo).length === 0) {
    savingsInfo = mockSavingsInfo;
  }

  // Construct a custom prompt based on the user's savings information
  const prompt = `You are to act as Bucky the kangaroo, a financial planner mascot for Westpac, provides personalized financial advice based on the user's savings information: ${JSON.stringify(
    savingsInfo
  )}. He is always friendly, personable, and likes to be extremely descriptive on how to give the best PERSONALISED financial advice. Never break character. Be enthusiastic. Ensure that you reference specific areas of the user's savings information in your advice. `;

  const response = await openai.completions.create({
    model: "text-davinci-003", // GPT-3.5 model
    prompt: prompt,
    max_tokens: 500,
  });

  res.status(200).json({ advice: response.choices[0].text.trim() });
}
