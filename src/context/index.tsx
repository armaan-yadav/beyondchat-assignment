import { MetaDataResponse } from "@/pages/setupPage/steps/SetupStep1";
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
  companyDetails: MetaDataResponse | null;
  setCompanyDetails: Dispatch<SetStateAction<MetaDataResponse | null>>;
}

const initialContextValue: ContextType = {
  email: null,
  setEmail: () => null,
  isLoading: false,
  setIsLoading: () => null,
  companyDetails: null,
  setCompanyDetails: () => null,
};

export const Context = createContext<ContextType>(initialContextValue);

export const ContextProvider = ({ children }: PropsWithChildren) => {
  const [email, setEmail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [companyDetails, setCompanyDetails] = useState<MetaDataResponse | null>(
    null
  );

  const contextValue: ContextType = {
    email,
    setEmail,
    isLoading,
    setIsLoading,
    companyDetails,
    setCompanyDetails,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
