import ActionProvider from "@/chatbot/ActionProvider";
import config from "@/chatbot/config";
import MessageParser from "@/chatbot/MessageParser";
import { Chatbot } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
type Props = {};

const ChatbotPage = (props: Props) => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center  ">
      <Chatbot
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        config={config}
      />
    </div>
  );
};

export default ChatbotPage;
