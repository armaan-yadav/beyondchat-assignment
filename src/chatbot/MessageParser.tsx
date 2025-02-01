import React, { ReactNode, ReactElement } from "react";

type MessageParserProps = {
  children: ReactNode;
  actions?: Record<string, unknown>;
};

const MessageParser: React.FC<MessageParserProps> = ({
  children,
  actions = {},
}) => {
  const parse = (message: string) => {
    console.log(message);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(
            child as ReactElement<{
              parse: (message: string) => void;
              actions: Record<string, unknown>;
            }>,
            {
              parse,
              actions,
            }
          );
        }
        return child;
      })}
    </div>
  );
};

export default MessageParser;
