import React, { useState, useReducer } from "react";

function reducer(state, action) {
  return { count: state + 1 };
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, 0);
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}
