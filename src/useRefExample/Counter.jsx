import { useEffect, useRef } from "react";

const Counter = () => {
  let refCount = useRef(0);
  //difference between const and useRef in variable definition in component scope
  //   const server = { baseUrl: "https://example.com/" };
  //   const server = useRef({ baseUrl: "https://example2.com/" });
  //   useEffect(() => {
  //     console.log(server.current.baseUrl);
  //   }, [server]);
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    const mouseOverHandler = () => {
      // const container = document.getElementById("container");
      //   container.innerHTML = "<div>hovered</div>";
      container.current.innerHTML = "<div>hovered</div>";
    };
    const mouseLeaveHandler = () => {
      //   const container = document.getElementById("container");
      //   container.innerHTML = `<div>reference count is ${refCount.current}</div>`;
      container.current.innerHTML = `<div>reference count is ${refCount.current}</div>`;
    };
    // container.addEventListener("mouseover", mouseOverHandler);
    // container.addEventListener("mouseleave", mouseLeaveHandler);
    container.current.addEventListener("mouseover", mouseOverHandler);
    container.current.addEventListener("mouseleave", mouseLeaveHandler);
    return () => {
      //   const container = document.getElementById("container");
      //   container.removeEventListener("mouseover", mouseOverHandler);
      //   container.removeEventListener("mouseleave", mouseLeaveHandler);
      container.current.removeEventListener("mouseover", mouseOverHandler);
      container.current.removeEventListener("mouseleave", mouseLeaveHandler);
    };
  }, []);
  const refCountHandler = (e) => {
    e.preventDefault();
    refCount.current = refCount.current + 1;
  };
  return (
    <div>
      <button ref={containerRef} id="container" onClick={refCountHandler}>
        reference count is {refCount.current}
      </button>
    </div>
  );
};

export default Counter;
