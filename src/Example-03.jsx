import { useState } from "react";

const Example03 = () => {
  const myState = useState(0);
  const [state, setState] = myState;
  console.log(setState);
  return <div></div>;
};

export default Example03;
