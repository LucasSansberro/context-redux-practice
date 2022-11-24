import React, { useState, useContext } from "react";
import { CounterContext } from "./Context/Context";

const CounterBase = () => {
  const [counterBase, setCounterBase] = useState("");
  const { counterBaseHandler } = useContext(CounterContext);

  const counterBaseInputHandler = (event) => {
    setCounterBase(parseInt(event.target.value));
  };

  return (
    <>
      <h1 className="mt-5 text-center">Context API pratice</h1>
      <div className="text-center mt-5 bg-light">
        <label htmlFor="counterBase" className="fw-bold me-5">
          Set the counter starting point (Default is 0)
        </label>
        <input
          type="number"
          onChange={counterBaseInputHandler}
          name="counterBase"
          value={counterBase}
        />
        <button
          className="btn btn-primary ms-5"
          type="button"
          onClick={() => counterBaseHandler(counterBase, setCounterBase)}
        >
          {" "}
          Confirm change
        </button>
      </div>
    </>
  );
};

export default CounterBase;
