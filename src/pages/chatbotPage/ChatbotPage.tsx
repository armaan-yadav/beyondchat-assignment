import ActionProvider from "@/chatbot/ActionProvider";
import config from "@/chatbot/config";
import MessageParser from "@/chatbot/MessageParser";
import { Chatbot } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import IConfig from "react-chatbot-kit/build/src/interfaces/IConfig";

const ChatbotPage = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center  ">
      <Chatbot
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        config={config as IConfig}
      />
    </div>
  );
};

export default ChatbotPage;
