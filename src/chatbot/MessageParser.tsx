import React, { ReactNode, ReactElement } from "react";

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

interface MessageParserProps {
  children: ReactNode;
  actions?: Partial<Actions>;
}

interface ChildProps {
  parse: (message: string) => void;
  actions: Partial<Actions>;
}

const MessageParser: React.FC<MessageParserProps> = ({
  children,
  actions = {},
}) => {
  const parse = (message: string) => {
    if (message.includes("hello")) {
      actions.handleHello?.();
    } else if (message.includes("dog")) {
      actions.handleDog?.(message);
    } else if (message.includes("goodbye")) {
      actions.handleGoodbye?.();
    } else if (message.includes("how are you")) {
      actions.handleHowAreYou?.();
    } else if (message.includes("hi there")) {
      actions.handleHiThere?.();
    } else if (message.includes("weather")) {
      actions.handleWeather?.();
    } else if (message.includes("time")) {
      actions.handleTime?.();
    } else if (message.includes("name")) {
      actions.handleName?.();
    } else if (message.includes("joke")) {
      actions.handleJoke?.();
    } else if (message.includes("help")) {
      actions.handleHelp?.();
    } else if (message.includes("who are you")) {
      actions.handleWhoAreYou?.();
    } else if (message.includes("what can you do")) {
      actions.handleCapabilities?.();
    } else if (message.includes("tell me something interesting")) {
      actions.handleFunFact?.();
    } else if (message.includes("news")) {
      actions.handleNews?.();
    } else if (message.includes("thank you")) {
      actions.handleThankYou?.();
    } else if (message.includes("bye")) {
      actions.handleBye?.();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as ReactElement<ChildProps>, {
            parse,
            actions,
          });
        }
        return child;
      })}
    </div>
  );
};

export default MessageParser;
