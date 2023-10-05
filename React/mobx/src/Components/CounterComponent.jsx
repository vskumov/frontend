import React from "react";
import { observer } from "mobx-react-lite";
import counter from "../state/counter";

const CounterComponent = observer(() => {
  console.log(counter);
  return (
    <div>
      <h2>Count: {counter.count}</h2>
      <button onClick={() => counter.increment()}>+</button> 
      <button onClick={() => counter.decrement()}>-</button>

    </div>
  );
});

export default CounterComponent;
