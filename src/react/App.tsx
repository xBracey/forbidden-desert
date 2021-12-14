import React, { useState } from "react";

export const App = () => {
  const [counter, setCounter] = useState(0);

  const onClick = () => {
    setCounter(counter + 1);
  };

  return <div onClick={onClick}>{`Hello World ${counter}`}</div>;
};
