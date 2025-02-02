import Groq from "groq-sdk";

export const getResponse = async (query: string): Promise<string> => {
  const groq = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    dangerouslyAllowBrowser: true,
  });
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `${query}(answer in less than 100 words)`,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });
    if (completion.choices[0].message.content) {
      return completion.choices[0].message.content;
    } else {
      return "Something went wrong :(";
    }
  } catch (error) {
    return "API Limit exceeded :(";
  }
};
