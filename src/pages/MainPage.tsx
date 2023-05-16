import RequestArea, { DEFAULT_QUERY } from 'components/RequestArea';
import { useState } from 'react';

export default function MainPage() {
  const [value, setValue] = useState(DEFAULT_QUERY);
  console.log(value);
  return (
    <div>
      <RequestArea value={value} onChange={(val) => setValue(val)} />
    </div>
  );
}
