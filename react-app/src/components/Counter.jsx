import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <>
      <h1>Contador: {count}</h1>
      <div style={{ textAlign: 'center', padding: '20px', display: "flex", gap: "1rem" }}>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Resetear</button>
      </div>
    </>
  );
}
