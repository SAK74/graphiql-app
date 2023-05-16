import CodeMirror from '@uiw/react-codemirror';
import { graphql } from 'cm6-graphql';
import { GraphQLSchema } from 'graphql';
import { useEffect, useState } from 'react';
import { buildHTTPExecutor } from '@graphql-tools/executor-http';
import { schemaFromExecutor } from '@graphql-tools/wrap';
import clsx from 'clsx';

export const DEFAULT_QUERY = `query Character($characterId: ID!) {
  character(id: $characterId) {
    gender
    id
    image
  }
}`;
const RequestArea = ({
  className,
  value,
  onChange,
}: {
  className?: string;
  value: string;
  onChange: (v: string) => void;
}) => {
  const [graphQLSchema, setGraphQLSchema] = useState<GraphQLSchema>();

  const url = 'https://rickandmortyapi.com/graphql';
  useEffect(() => {
    const fetchSchema = async () => {
      const remoteExecutor = buildHTTPExecutor({
        endpoint: url,
      });
      const schema = await schemaFromExecutor(remoteExecutor);
      setGraphQLSchema(schema);
    };
    fetchSchema();
  }, []);

  return (
    <>
      {graphQLSchema && (
        <CodeMirror
          className={clsx(className)}
          value={value}
          onChange={onChange}
          extensions={[graphql(graphQLSchema)]}
          height="300px"
          theme="light"
        />
      )}
    </>
  );
};

export default RequestArea;
