import { Dispatch, SetStateAction, createContext, useContext } from 'react';

interface ContextType {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  variables?: VarsType;
  setVariables: Dispatch<SetStateAction<VarsType | undefined>>;
  request: RequestType;
  runRequest: () => void;
}
export interface VarsType {
  id: string;
}
export interface RequestType {
  query?: string;
  variables?: VarsType;
}

export const Ctx = createContext<ContextType | undefined>(undefined);

export const useQueryContext = () => {
  const ctx = useContext(Ctx);
  if (!ctx) {
    throw Error('component out of context...');
  }
  return ctx;
};

export const QueryProvider = Ctx.Provider;
