import { useState } from "react";

const Example01 = () => {
  const [counterNumber, setCounterNumber] = useState(0);

  const clickHandler = () => {
    // setCounterNumber(counterNumber + 1);
    setCounterNumber((previous) => {
      console.log(previous);
      return previous + 1;
    });
  };

  return (
    <div>
      <button onClick={clickHandler}>Counter {counterNumber}</button>
    </div>
  );
};

export default Example01;
