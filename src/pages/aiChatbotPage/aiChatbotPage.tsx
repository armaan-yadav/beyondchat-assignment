import ActionProviderAi from "@/ai_chatbot/ActionProviderAi";
import configAi from "@/ai_chatbot/configAi";
import MessageParserAi from "@/ai_chatbot/MessageParserAi";
import Chatbot from "react-chatbot-kit";
import IConfig from "react-chatbot-kit/build/src/interfaces/IConfig";

const AiChatbotPage = () => {
  return (
    <div className=" flex items-center justify-center h-[calc(100vh-66px)] ai bg-gradient-to-r to-blue-200 from-indigo-300">
      <Chatbot
        actionProvider={ActionProviderAi}
        config={configAi as IConfig}
        headerText="Your Friendly Ai Chatbot Dora <3"
        messageParser={MessageParserAi}
      />
    </div>
  );
};

export default AiChatbotPage;
