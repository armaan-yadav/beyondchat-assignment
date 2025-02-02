import React, { ReactNode, ReactElement } from "react";

interface Actions {
  handleMessage: (message: string) => void;
}

interface MessageParserProps {
  children: ReactNode;
  actions?: Partial<Actions>;
}

interface ChildProps {
  parse: (message: string) => void;
  actions: Partial<Actions>;
}

const MessageParserAi: React.FC<MessageParserProps> = ({
  children,
  actions = {},
}) => {
  const parse = (message: string) => {
    actions.handleMessage?.(message);
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

export default MessageParserAi;
