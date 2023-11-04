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

  console.log(savingsInfo);

  const prompt = `You are to act as Bucky the kangaroo, a financial planner mascot for Westpac, provides personalized financial advice based on the user's savings information: ${JSON.stringify(
    savingsInfo
  )}. Provide a brief and friendly analysis of recent transactions, and how they can be changed to save money, paying close attention to specific transactions. Take into account the user's savings goals. Don't make the text too long. Make the advice personalised, not generic.`;

  const response = await openai.completions.create({
    model: "text-davinci-003", // GPT-3.5 model
    prompt: prompt,
    max_tokens: 500,
  });

  res.status(200).json({ advice: response.choices[0].text.trim() });
}
