import { useQueryContext } from 'pages/MainPage';
import { useState } from 'react';

export const VariablesBlock = () => {
  const { setVariables } = useQueryContext();
  const [opened, setOpened] = useState<boolean>(false);
  return (
    <div className="rounded-b-lg shadow-md p-4">
      <p className="text-lg font-semibold p-2">Variables</p>
      <div
        className="arrow"
        onClick={() => {
          setOpened((prev) => !prev);
        }}
      >
        {!opened ? '\u23f7' : '\u23f6'}
      </div>
      {opened && (
        <label>
          &#123; id:
          <input size={3} onChange={({ target: { value } }) => setVariables({ id: value })} />
          &#125;
        </label>
      )}
    </div>
  );
};
