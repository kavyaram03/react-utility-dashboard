import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter</h2>

      <div className="value">{count}</div>

      {count === 0 && (
        <p className="message">Minimum limit reached</p>
      )}

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => count > 0 && setCount(count - 1)}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;