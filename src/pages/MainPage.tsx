import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Docs } from 'components/Docs';
import { Editor } from 'components/main/Editor';
import { ResponseComponent } from 'components/main/Response';
import { Dispatch, SetStateAction, createContext, useState, useContext } from 'react';
import RequestArea, { DEFAULT_QUERY } from 'components/RequestArea';
import '../components/main/temp.css'; //template

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
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

const initialQuery = `query($id:ID!) {
  character(id:$id){
    name,
    id
  }
}
`;

export default function MainPage() {
  const [query, setQuery] = useState<string>(initialQuery);
  const [variables, setVariables] = useState<VarsType | undefined>({ id: '2' });
  const [request, setRequest] = useState<RequestType>({});
  const [value, setValue] = useState(DEFAULT_QUERY);

  const runRequest = () => {
    setRequest({ query, variables });
  };

  return (
    <>
      <ApolloProvider client={client}>
        <Ctx.Provider value={{ query, setQuery, variables, setVariables, request }}>
          <div className="flex justify-between">
            <Docs />
            <RequestArea value={value} onChange={(val) => setValue(val)} />
            <ResponseComponent />
          </div>
        </Ctx.Provider>
      </ApolloProvider>
    </>

  );
}
