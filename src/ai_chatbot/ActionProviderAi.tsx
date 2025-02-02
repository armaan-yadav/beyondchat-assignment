import { getResponse } from "@/services/ai";
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
  handleMessage: (message: string) => void;
}

interface Props {
  createChatBotMessage: (message: string, options: object) => IChatBotMessage;
  setState: Dispatch<SetStateAction<ChatState>>;
  children: ReactNode;
}

const ActionProviderAi: React.FC<Props> = ({ children, setState }) => {
  const handleMessage = async (e: string) => {
    const botMessage = createChatBotMessage("Thinking...", {
      delay: 0,
      payload: { message: e },
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
      message: e,
    }));

    const answer = await getResponse(e);
    const botMessage1 = createChatBotMessage(answer, {
      delay: 0,
      payload: { message: e },
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage1],
      message: e,
    }));
  };

  const actions: Actions = {
    handleMessage,
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

export default ActionProviderAi;
