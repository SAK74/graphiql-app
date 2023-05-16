import { useQueryContext } from 'pages/MainPage';
import { VariablesBlock } from './Variables';
import { FC } from 'react';

export const Editor: FC<{ startReq: () => void }> = ({ startReq }) => {
  const { setQuery } = useQueryContext();
  return (
    <div className="editor">
      <div className="editor-content" onChange={() => setQuery('example query from editor...')}>
        Example view
      </div>
      <div className="button" onClick={startReq}>
        play
      </div>
      <VariablesBlock />
    </div>
  );
};
