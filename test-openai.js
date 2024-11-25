const OpenAI = require("openai");

const openai = new OpenAI({
  baseURL: "https://api.sambanova.ai/v1/",
  apiKey: "your-api-key",
});

async function testConnection() {
  try {
    const response = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Hello, world!" }],
      model: "Meta-Llama-3.1-405B-Instruct",
    });
    console.log(response);
  } catch (error) {
    console.error("API connection error:", error);
  }
}

testConnection();
