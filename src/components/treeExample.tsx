import React, { FC } from 'react';
import { Tree, useTreeState } from 'react-hyper-tree';

const data = {
  id: 'root',
  name: 'Root',
  children: [
    {
      id: 'node1',
      name: 'Node 1',
      children: [
        { id: 'leaf1', name: 'Leaf 1' },
        { id: 'leaf2', name: 'Leaf 2' },
      ],
    },
    {
      id: 'node2',
      name: 'Node 2',
      children: [
        { id: 'leaf3', name: 'Leaf 3' },
        { id: 'leaf4', name: 'Leaf 4' },
      ],
    },
  ],
};

const TreeExample: FC = () => {
  const { required, handlers } = useTreeState({
    data,
    id: 'your_tree_id',
  });
  return (
    <div>
      <h1>React Hyper Tree Example</h1>
      <Tree {...required} {...handlers} />
    </div>
  );
};

export default TreeExample;
