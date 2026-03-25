import React, { useState } from "react";

type Props = {};

const Counter = (props: Props) => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleCount}>Increment</button>
    </div>
  );
};

export default Counter;
