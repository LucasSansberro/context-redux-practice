import { useContext } from "react";
import { CounterContext } from "./Context/Context";

const Counter = () => {
  const { counterHandler } = useContext(CounterContext);

  return (
    <div className="container">
      <div className="mt-5 container d-flex justify-content-evenly bg-light">
        <p className="mt-3">Counter</p>
        <button className="btn btn-primary" onClick={counterHandler}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
