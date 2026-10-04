import { useState } from "react";

function RandomNumber() {
  const [number, setNumber] = useState(null);

  function generateNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNumber);
  }

  return (
    <div>
      <h2>Random Number Generator</h2>

      {number === null ? (
        <p className="message">No number generated yet</p>
      ) : (
        <div className="value">{number}</div>
      )}

      <button onClick={generateNumber}>
        Generate Random Number
      </button>
    </div>
  );
}

export default RandomNumber;