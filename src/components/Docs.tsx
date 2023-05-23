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
              <p className="italic pb-2">{field.description}</p>
              {field.args && (
                <ul>
                  <h3 className="underline">Variables:</h3>
                  {field.args.map((item, index) => {
                    return (
                      <li className="list-disc" key={index}>
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
