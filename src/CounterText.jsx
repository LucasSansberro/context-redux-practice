import React, { useContext } from "react";
import { CounterContext } from "./Context/Context";

const CounterText = () => {
  const { counter } = useContext(CounterContext);

  return <h3 className="text-center mt-5">El contador está en {counter}</h3>;
};

export default CounterText;
