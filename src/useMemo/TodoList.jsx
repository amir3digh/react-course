import { useEffect, useMemo, useState, memo } from "react";
import { filterTodos } from "./utils";

export default function TodoList({ todos, theme, tab }) {
  // We can also write this with useEffect but useMemo has less codes
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // const [visibleTodos, setVisibleTodos] = useState(() =>
  //   filterTodos(todos, tab)
  // );
  // useEffect(() => {
  //   console.log(tab);
  //   setVisibleTodos(filterTodos(todos, tab));
  // }, [todos, tab]);
  // const visibleTodos = filterTodos(todos, tab);
  return (
    <div className={theme}>
      <p>
        <b>
          Note: <code>filterTodos</code> is artificially slowed down!
        </b>
      </p>
      <VisibleTodos visibleTodos={visibleTodos} />
    </div>
  );
}

const VisibleTodos = memo(function VisibleTodos({ visibleTodos }) {
  console.log("component rendered");
  console.log("[ARTIFICIALLY SLOW] rendering VisibleTodos");
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }
  return (
    <ul>
      {visibleTodos.map((todo) => (
        <li key={todo.id}>{todo.completed ? <s>{todo.text}</s> : todo.text}</li>
      ))}
    </ul>
  );
});
