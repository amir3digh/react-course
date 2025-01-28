import { useState } from "react";
import "./App.css";
import { Products } from "./Products";
import { UseRefHook } from "./UseRefHook";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Products /> */}
      <UseRefHook />
    </>
  );
}

export default App;
