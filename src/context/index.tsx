import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

interface ContextType {
  email: string | null;
  setEmail: Dispatch<SetStateAction<string | null>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const initialContextValue: ContextType = {
  email: null,
  setEmail: () => null,
  setIsLoading: () => null,
  isLoading: false,
};

export const Context = createContext<ContextType>(initialContextValue);

export const ContextProvider = ({ children }: PropsWithChildren) => {
  const [email, setEmail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const contextValue: ContextType = {
    email,
    setEmail,
    isLoading,
    setIsLoading,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
