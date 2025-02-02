import ActionProvider from "@/chatbot/ActionProvider";
import config from "@/chatbot/config";
import MessageParser from "@/chatbot/MessageParser";
import { Chatbot } from "react-chatbot-kit";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { MouseEventHandler, useState } from "react";
import "react-chatbot-kit/build/main.css";
import LandingPage from "./components/LandingPage";
import IConfig from "react-chatbot-kit/build/src/interfaces/IConfig";
import { Link } from "react-router";

const FloatingChatButton = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: MouseEventHandler;
}) => {
  return (
    <div className="fixed bottom-6 right-6 flex items-center justify-center flex-col gap-2">
      {!isOpen && (
        <p className="text-black text-sm animate-fade-in">
          Click to test chatbot
        </p>
      )}
      <Button
        onClick={onClick}
        className={`
          w-12 h-12 rounded-full 
          shadow-lg flex items-center justify-center 
          bg-white text-black hover:bg-white/70
          transition-all duration-500
       ${!isOpen && "animate-bounce hover:animate-none"}
          hover:scale-110
        `}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>
    </div>
  );
};

const ChatbotContainer = ({ isOpen }: { isOpen: boolean }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{
      opacity: isOpen ? 1 : 0,
      scale: isOpen ? 1 : 0.8,
      display: isOpen ? "block" : "none",
    }}
    transition={{ duration: 0.2 }}
    className="fixed bottom-24 right-6 z-50"
  >
    <Chatbot
      headerText="This is how chatbot will look like"
      config={config as IConfig}
      actionProvider={ActionProvider}
      messageParser={MessageParser}
    />
    <p className="text-black text-[10px] text-center">
      Chatbot not working as intended?
      <Link to={"/feedback"}>
        <span className="underline">Share Feedback</span>
      </Link>
    </p>
  </motion.div>
);

const DummyWebsite = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div className="w-full relative">
      <LandingPage />
      <FloatingChatButton isOpen={isChatbotOpen} onClick={toggleChatbot} />
      <ChatbotContainer isOpen={isChatbotOpen} />
    </div>
  );
};

export default DummyWebsite;
