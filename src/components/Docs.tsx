import { gql, useQuery } from '@apollo/client';
import { SCHEMA_QUERY } from '_constants/defaultQuery';
import { Tree, useTreeState } from 'react-hyper-tree';
import { nanoid } from 'nanoid';
import { useCallback, useEffect, useState } from 'react';

export const Docs = () => {
  interface argsType {
    __typename: string;
    name: string;
  }
  interface TreeNode {
    id: string;
    name: string;
    children?: TreeNode[];
  }

  const { loading, error, data: schemaData } = useQuery(gql(SCHEMA_QUERY));

  const [data, setData] = useState<TreeNode>({
    id: '0',
    name: 'Root',
  });

  const dataRender: () => TreeNode = useCallback(() => {
    if (schemaData) {
      const dataRendered: TreeNode[] = schemaData.__schema.queryType.fields.map(
        (field: { name: string; description: string; args: argsType[] }) => {
          const children = field.args.map((arg: argsType) => ({
            id: nanoid(),
            name: arg.name,
          }));

          const node: TreeNode = {
            id: nanoid(),
            name: field.name,
            children: children,
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
      id: '0',
      name: 'Root',
      children: [],
    };
  }, [schemaData]);

  console.log(data);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-6">
      <h1 className="text-lg font-semibold p-2">Documents</h1>
      {schemaData && <Tree {...required} {...handlers} />}
    </div>
  );
};
