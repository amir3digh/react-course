import { useState, useEffect } from "react";

export const Example1 = (props) => {
  const [text, setText] = useState("a");
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(5);

  useEffect(() => {
    console.log("Hello");
    return () => {
      console.log("good bye");
    };
  }, []);
  //   const logData = () => {
  //     console.log(text, number);
  //     setTimeout(() => {
  //       setText((prev) => (prev += "b"));
  //     }, 2000);
  //     setTimeout(() => {
  //       setNumber((prev) => (prev += 1));
  //     }, 3000);
  //   };
  // this useEffect always runs:
  // useEffect(logData)

  // this useEffect runs logData function just on mount
  //   useEffect(logData, [])

  // this useEffect runs when number OR text changes
  // useEffect(logData, [number, text]);

  // Another form of useEffect:
  //   useEffect(() => {
  //     console.log(text);
  //   }, [text]);
  //   useEffect(() => {
  // console.log(number);
  //   }, [number]);
  //   useEffect(() => {
  //     console.log(number2);
  //   }, [number2]);
  return <div>I am Example1</div>;
};
