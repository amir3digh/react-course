// import { useState } from "react";
import "./App.css";
// import Counter from "./useRefExample/Counter";
// import MemoCounter from "./memoExample/MemoCounter";
// import MainUseMemo from "./useMemo/Main";
import MainUseCallback from "./useCallback/Main";

function App() {
  // const [count, setCount] = useState(0);
  // const [theme, setTheme] = useState("dark");

  return (
    <div className="flex flex-col gap-4">
      {/* <button
        onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
      >
        theme is {theme}
      </button> */}
      {/* <Counter /> */}
      {/* <MemoCounter count={count} setCount={setCount} /> */}
      {/* <MainUseMemo /> */}
      <MainUseCallback />
    </div>
  );
}

export default App;
