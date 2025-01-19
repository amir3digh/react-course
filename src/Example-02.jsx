import { useState } from "react";

const Example02 = () => {
  const [isOn, setIsOn] = useState(true);

  const toggleHandler = () => {
    setIsOn((prev) => {
      if (prev) {
        return false;
      } else {
        return true;
      }
    });
    // setIsOn((prev) => !prev);
  };
  return (
    <button
      onClick={toggleHandler}
      className={`relative h-[42px] w-20 ${
        isOn ? "bg-blue-800" : "bg-slate-600"
      } rounded-full border border-slate-400`}
    >
      <div
        className={`absolute ${
          isOn ? "right-0" : "left-0"
        } top-0 w-10 h-10 bg-white rounded-full`}
      ></div>
    </button>
  );
};

export default Example02;
