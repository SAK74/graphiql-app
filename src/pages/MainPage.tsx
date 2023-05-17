import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Docs } from 'components/Docs';
import { ResponseComponent } from 'components/main/Response';
import { Dispatch, SetStateAction, createContext, useState, useContext } from 'react';
import RequestArea from 'components/RequestArea';
import { VariablesBlock } from 'components/main/Variables';
import { API_URL } from '_constants/apiUrl';
import DEFAULT_QUERY from '_constants/defaultQuery';

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

interface ContextType {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  variables?: VarsType;
  setVariables: Dispatch<SetStateAction<VarsType | undefined>>;
  request: RequestType;
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

export default function MainPage() {
  const [query, setQuery] = useState<string>(DEFAULT_QUERY);
  const [variables, setVariables] = useState<VarsType | undefined>({ id: '2' });
  const [request, setRequest] = useState<RequestType>({});

  const runRequest = () => {
    setRequest({ query, variables });
  };

  return (
    <>
      <ApolloProvider client={client}>
        <Ctx.Provider value={{ query, setQuery, variables, setVariables, request }}>
          <div className="grid gap-10 grid-cols-1 mt-2 md:grid-cols-[20%,35%,35%]">
            <Docs />
            <div>
              <div className="rounded-t-lg shadow-md p-4">
                <div className="flex justify-between">
                  <p className="text-lg font-semibold p-2">Request</p>
                  <button
                    onClick={runRequest}
                    className="py-2 px-3 hover:bg-light-blue hover:text-black text-white h-10 bg-dark-blue rounded-md"
                  >
                    Run
                  </button>
                </div>
                <RequestArea />
              </div>
              <VariablesBlock />
            </div>
            <ResponseComponent />
          </div>
        </Ctx.Provider>
      </ApolloProvider>
    </>
  );
}
