import { memo, useEffect } from "react";

const MemoCounter = memo(function MemoCounter({ count, setCount }) {
  const refCountHandler = (e) => {
    e.preventDefault();
    setCount((prev) => prev + 1);
  };
  useEffect(() => {
    console.log("memo counter rendered");
  });
  return (
    <div>
      <button onClick={refCountHandler}>reference count is {count}</button>
    </div>
  );
});

export default MemoCounter;
