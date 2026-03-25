import React, { useRef } from "react";

type Props = {};

const Timer = (props: Props) => {
  const countRef = useRef<number>(0);

  const increment = () => {
    countRef.current += 1;
    console.log("Current count:", countRef.current);
  };

  console.log("render");

  return (
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Timer;
