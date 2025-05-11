import React from "react";
import { useState } from "react";

const Apis = () => {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  return (
    <div>
      <h2>{advice}</h2>
      <button onClick={getAdvice}>Press for advice</button>
      <span>You pressed the button {count} times</span>
    </div>
  );
};

export default Apis;
