import { gql, useQuery } from '@apollo/client';
import { SCHEMA_QUERY } from '_constants/defaultQuery';

export const Docs = () => {
  interface argsType {
    __typename: string;
    name: string;
  }
  const { loading, error, data } = useQuery(gql(SCHEMA_QUERY));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-6">
      <h1 className="text-lg font-semibold p-2">Documents</h1>
      {data.__schema.queryType.fields.map(
        (field: { name: string; description: string; args: argsType[] }) => {
          console.log(field.args);
          return (
            <div key={field.name}>
              <h2 className="text-lg font-semibold p-2">{field.name}</h2>
              <p className="italic">{field.description}</p>
              {field.args && (
                <ul>
                  {field.args.map((item, index) => {
                    return (
                      <li key={index}>
                        {item.name}:{item.__typename}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        }
      )}
    </div>
  );
};

/*import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';

const GET_SCHEMA_FIELDS = gql`{
  __schema {
    queryType {
      fields {
        name
        description
        args{
          name
          type {
            name
          }
        }
      }
    }
  }
}
`;

const SchemaFields = () => {
  const { loading, error, data } = useQuery(GET_SCHEMA_FIELDS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const schemaTypes = data.__schema.types.filter(
    (type: { fields: any[] }) => type.fields && type.fields.length > 0
  );

  return (
    <div>
      <h2>Schema Fields:</h2>
      {schemaTypes.map((type: { name: string; fields: { name: string; args: { name: string; type: any }[] }[] }) => (
        <div key={type.name}>
          <h3>{type.name}</h3>
          {type.fields.map((field) => (
            <div key={field.name}>
              <p>{field.name}</p>
              {field.args.map((arg) => (
                <p key={arg.name}>{`${arg.name}: ${arg.type.kind === 'NON_NULL' ? arg.type.ofType.name : arg.type.name}`}</p>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const client = new ApolloClient({
  uri: 'https://your-graphql-api-endpoint',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>GraphQL Explorer</h1>
        <SchemaFields />
      </div>
    </ApolloProvider>
  );
};

export default App;





{
  __schema {
    queryType {
      fields {
        name
        description
        args{
          name
          type {
            
          }
        }
      }
    }
  }
}

{
  __schema {
    queryType {
      fields {
        name
        description
        args{
          name
          type {
            name
            fields {
              name
              description
              args{
                
              }
            }
            
          }
        }
      }
    }
  }
}
*/
