import { gql, useQuery } from '@apollo/client';
import { Tree, useTreeState } from 'react-hyper-tree';
import { nanoid } from 'nanoid';
import { useCallback, useEffect, useState } from 'react';
import { INTROSPECTION_QUERY } from '_constants/schemaQuery';
import { TreeNode, Type, argsType } from 'types/types';

const Docs = () => {
  const { error, data: schemaData } = useQuery(gql(INTROSPECTION_QUERY));

  const [data, setData] = useState<TreeNode>({
    id: '0',
    name: 'Query',
  });

  const dataRender: () => TreeNode = useCallback(() => {
    if (schemaData) {
      const dataRendered: TreeNode[] = schemaData.__schema.queryType.fields.map(
        (field: { name: string; description: string; args: argsType[]; type: Type }) => {
          const childrenArg = field.args.map((arg: argsType) => ({
            id: nanoid(),
            name: arg.name,
          }));

          const childrenFields =
            field.type.fields &&
            field.type.fields.map((field) => {
              const descriptions = {
                id: nanoid(),
                name: field.description,
              };

              const typesDescription = {
                id: nanoid(),
                name: field.type.description,
              };

              const types = {
                id: nanoid(),
                name: field.type.name,
                children: [typesDescription],
              };

              const names = {
                id: nanoid(),
                name: field.name,
                children: [
                  { id: nanoid(), name: 'description', children: [descriptions] },
                  { id: nanoid(), name: 'type', children: [types] },
                ],
              };
              return names;
            });

          const childrenDescription = [
            {
              id: nanoid(),
              name: field.description,
            },
          ];

          const node: TreeNode = {
            id: nanoid(),
            name: field.name,
            children: [
              { id: nanoid(), name: 'arguments', children: childrenArg },
              { id: nanoid(), name: 'description', children: childrenDescription },
              { id: nanoid(), name: 'fields', children: childrenFields },
            ],
          };

          return node;
        }
      );
      const result = {
        id: 'myTree',
        name: 'Query',
        children: dataRendered,
      };
      return result;
    }
    return {
      id: 'myTree',
      name: 'Query',
      children: [],
    };
  }, [schemaData]);

  useEffect(() => {
    if (schemaData) {
      const data = dataRender();
      setData(data);
    }
  }, [schemaData, dataRender]);

  const { required, handlers } = useTreeState({
    data,
    id: 'myTree',
    refreshAsyncNodes: true,
  });

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-6">
      <h1 className="text-lg font-semibold p-2">Documents</h1>

      {schemaData && <Tree {...required} {...handlers} />}
    </div>
  );
};

export default Docs;
