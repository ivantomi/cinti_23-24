import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    setCount((count) => count - 1);
  };

  return (
    <div>
      <div>Counter: </div>
      <div>{count}</div>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Smanji</button>
    </div>
  );
};

export default Counter;
