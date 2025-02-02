import { createChatBotMessage } from "react-chatbot-kit";

const botName = "Dora";
const configAi = {
  initialMessages: [
    createChatBotMessage(
      `Namaste Visitor, I am an AI powered chatbot ${botName}.`,
      {}
    ),
  ],

  state: {
    message: "",
  },
};

export default configAi;
