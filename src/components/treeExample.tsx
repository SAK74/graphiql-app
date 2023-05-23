import React, { FC } from 'react';
import { Tree, useTreeState } from 'react-hyper-tree';
import { nanoid } from 'nanoid';

const data = {
  id: 'Docs',
  name: 'Query',
  children: [
    {
      id: 'Character',
      name: 'Character',
      children: [
        {
          id: nanoid(),
          name: 'description',
          children: [{ id: nanoid(), name: 'Get a specific character by ID' }],
        },
        {
          id: nanoid(),
          name: 'arguments',
          children: [
            {
              id: nanoid(),
              name: 'ID:ID',
              children: [
                {
                  id: nanoid(),
                  name: 'ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as "4") or integer (such as 4) input value will be accepted as an ID.',
                },
              ],
            },
          ],
        },
        {
          id: nanoid(),
          name: 'fields',
          children: [
            { id: nanoid(), name: 'type: String' },
            { id: nanoid(), name: 'status: String' },
            { id: nanoid(), name: 'species: String' },
            { id: nanoid(), name: 'origin: [Location]!' },
            { id: nanoid(), name: 'name: String' },
            { id: nanoid(), name: 'location: [Location]!' },
            { id: nanoid(), name: 'image: String' },
            { id: nanoid(), name: 'id: ID' },
            { id: nanoid(), name: 'gender: String' },
            { id: nanoid(), name: 'episode: [Episode]!' },
            { id: nanoid(), name: 'created: String' },
          ],
        },
      ],
    },
    {
      id: 'Characters',
      name: 'Characters',
      children: [
        {
          id: nanoid(),
          name: 'description',
          children: [{ id: nanoid(), name: 'Get the list of all characters' }],
        },
        {
          id: nanoid(),
          name: 'arguments',
          children: [
            { id: nanoid(), name: 'filter: FilterCharacter' },
            { id: nanoid(), name: 'page: Int' },
          ],
        },
        {
          id: nanoid(),
          name: 'fields',
          children: [
            { id: nanoid(), name: 'results:[Character]' },
            { id: nanoid(), name: 'info:Info' },
          ],
        },
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

    {
      id: 'node2',
      name: 'Node 2',
      children: [
        { id: 'leaf3', name: 'Leaf 3' },
        { id: 'leaf4', name: 'Leaf 4' },
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

    {
      id: 'node2',
      name: 'Node 2',
      children: [
        { id: 'leaf3', name: 'Leaf 3' },
        { id: 'leaf4', name: 'Leaf 4' },
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

    {
      id: 'node2',
      name: 'Node 2',
      children: [
        { id: 'leaf3', name: 'Leaf 3' },
        { id: 'leaf4', name: 'Leaf 4' },
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
      <h1>Documents</h1>
      <Tree {...required} {...handlers} />
    </div>
  );
};

export default TreeExample;
