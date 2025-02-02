import React, {
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
} from "react";
import { createChatBotMessage } from "react-chatbot-kit";

export interface IChatBotMessage {
  loading: boolean;
  widget?: string;
  delay?: number;
  payload?: any;
  message: string;
  type: string;
  id: number;
}

interface ChatState {
  messages: IChatBotMessage[];
}

interface Actions {
  handleHello: () => void;
  handleDog: (message: string) => void;
  handleGoodbye: () => void;
  handleHowAreYou: () => void;
  handleHiThere: () => void;
  handleWeather: () => void;
  handleTime: () => void;
  handleName: () => void;
  handleJoke: () => void;
  handleHelp: () => void;
  handleWhoAreYou: () => void;
  handleCapabilities: () => void;
  handleFunFact: () => void;
  handleNews: () => void;
  handleThankYou: () => void;
  handleBye: () => void;
}

interface Props {
  createChatBotMessage: (message: string, options: object) => IChatBotMessage;
  setState: Dispatch<SetStateAction<ChatState>>;
  children: ReactNode;
}

const ActionProvider: React.FC<Props> = ({ children, setState }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.", {});
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDog = (e: string) => {
    console.log(e);

    const botMessage = createChatBotMessage(
      "I love dogs! They're such loyal companions.",
      { widget: "dog", payload: { message: e } }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      message: e,
    }));
  };

  const handleGoodbye = () => {
    const botMessage = createChatBotMessage("Goodbye! Have a great day.", {});
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleHowAreYou = () => {
    const botMessage = createChatBotMessage(
      "I'm just a bot, but I'm doing great! How about you?",
      {}
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleHiThere = () => {
    const botMessage = createChatBotMessage(
      "Hi there! How can I assist you today?",
      {}
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleWeather = () => {
    const botMessage = createChatBotMessage(
      "The weather depends on where you are! Would you like a forecast?",
      {}
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleTime = () => {
    const botMessage = createChatBotMessage(
      "Time is always moving forward! Do you need the current time?",
      {}
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleName = () => {
    const botMessage = createChatBotMessage(
      "I'm your friendly chatbot Laila! What's your name?",
      {}
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleJoke = () => {
    const botMessage = createChatBotMessage(
      "Why don't skeletons fight each other? Because they don’t have the guts!",
      {}
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleHelp = () => {
    const botMessage = createChatBotMessage(
      "I'm here to assist you! You can ask me about the weather, time, jokes, or general queries.",
      {}
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleWhoAreYou = () => {
    const botMessage = createChatBotMessage(
      "I'm your friendly chatbot! Here to help with your queries.",
      {}
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleCapabilities = () => {
    const botMessage = createChatBotMessage(
      "I can tell jokes, provide weather updates, share news, and assist with various questions!",
      {}
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleFunFact = () => {
    const botMessage = createChatBotMessage(
      "Did you know? Honey never spoils! Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
      {}
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleNews = () => {
    const botMessage = createChatBotMessage(
      "I can provide the latest news updates. What topic are you interested in?",
      {}
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleThankYou = () => {
    const botMessage = createChatBotMessage(
      "You're welcome! Let me know if I can help with anything else.",
      {}
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleBye = () => {
    const botMessage = createChatBotMessage(
      "Goodbye! Take care and have a great day!",
      {}
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const actions: Actions = {
    handleHello,
    handleDog,
    handleGoodbye,
    handleHowAreYou,
    handleHiThere,
    handleWeather,
    handleTime,
    handleName,
    handleJoke,
    handleHelp,
    handleWhoAreYou,
    handleCapabilities,
    handleFunFact,
    handleNews,
    handleThankYou,
    handleBye,
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as ReactElement<any>, {
            actions,
          });
        }
        return child;
      })}
    </div>
  );
};

export default ActionProvider;
