import React, { useState } from "react";
import Body from "./body/body";
import Header from "./header/header";

const App = () => {
  const [numType, setNumType] = useState("even");
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(count * 0);
  };

  const typeOfNum = () => {
    if (count % 2 !== 0) {
      setNumType("odd");
    } else {
      setNumType("even");
    }
  };

  return (
    <>
      <Header
        count={count}
        numType={numType}
        increment={increment}
        decrement={decrement}
        reset={reset}
        typeOfNum={typeOfNum}
      />
      <Body
        count={count}
        numType={numType}
        increment={increment}
        decrement={decrement}
        reset={reset}
        typeOfNum={typeOfNum}
      />
    </>
  );
};

export default App;
