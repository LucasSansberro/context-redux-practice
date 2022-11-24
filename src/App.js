import { CounterProvider } from "./Context/Context";
import Counter from "./Counter";
import CounterBase from "./CounterBase";
import CounterText from "./CounterText";

const App = () => {
  return (
    <>
      <CounterProvider>
        <CounterBase />
        <Counter />
        <CounterText />
      </CounterProvider>
    </>
  );
};

export default App;
