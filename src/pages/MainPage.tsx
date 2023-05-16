import RequestArea, { DEFAULT_QUERY } from 'components/RequestArea';
import React, { useState } from 'react';

export default function MainPage() {
  const [value, setValue] = useState(DEFAULT_QUERY);

  return (
    <div>
      <RequestArea value={value} onChange={() => setValue(value)} />
    </div>
  );
}
