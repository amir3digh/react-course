import { useState } from "react";

import "./App.css";
import { Example1 } from "./Example1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {count > 5 && count < 10 && <Example1 count={count} />}
      <h2 className="text-3xl">{count}</h2>
      <button onClick={() => setCount((prev) => (prev += 1))}>Count</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default App;
