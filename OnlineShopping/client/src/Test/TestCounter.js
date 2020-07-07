import React, { useState } from 'react';

function TestCounter(props) {
  let [count, setCount] = useState(0);

  return (
    <div>
      <div onClick={() => setCount(count - 1)} className="button">
        onDecrease
      </div>
      <input
        onChange={(event) => setCount(parseInt(event.target.value) || 0)}
        type="number"
        value={count}
        step="1"
      />
      <div onClick={() => setCount(count + 1)} className="button">
        onIncrease
      </div>
    </div>
  );
}

export default TestCounter;
