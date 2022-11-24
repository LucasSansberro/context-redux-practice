import { CounterProvider } from "./Context/Context";
import Counter from "./Counter";
import CounterBase from "./CounterBase";
import CounterText from "./CounterText";
import { CounterRedux } from "./CounterRedux";
import { Store } from "./Store/Store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <>
      <CounterProvider>
        <CounterBase />
        <Counter />
        <CounterText />
      </CounterProvider>
      <hr className="my-5"/>
      <Provider store={Store}>
        <CounterRedux />
      </Provider>
    </>
  );
};

export default App;
