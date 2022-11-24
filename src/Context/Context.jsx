import React, { createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const counterHandler = () => {
    setCounter((value) => value + 1);
  };

  const counterBaseHandler = (base, callback) => {
    base !== "" && setCounter(base);
    callback("");
  };

  return (
    <CounterContext.Provider
      value={{ counter, counterHandler, counterBaseHandler }}
    >
      {children}
    </CounterContext.Provider>
  );
};
