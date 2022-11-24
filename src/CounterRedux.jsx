import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./Store/counterSlice";

export function CounterRedux() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-center mt-5 ">
      <h2 className="my-5">Redux practice</h2>
      <div className="d-flex justify-content-evenly">
        <button
          className="btn btn-primary"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          className="btn btn-primary"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
