import React, { ReactElement, ReactNode } from "react";

export interface IChatBotMessage {
  loading: boolean;
  widget?: string;
  delay?: number;
  payload?: any;
  message: string;
  type: string;
  id: number;
}

interface ChildComponentProps {
  actions?: Record<string, unknown>;
}

interface Props {
  createChatBotMessage: IChatBotMessage;
  setState: ReactElement;
  children: ReactNode;
}

const ActionProvider: React.FC<Props> = ({
  createChatBotMessage,
  setState,
  children,
}) => {
  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<ChildComponentProps>(child)) {
          return React.cloneElement(child, {
            actions: {},
          });
        }
        return child;
      })}
    </div>
  );
};

export default ActionProvider;
