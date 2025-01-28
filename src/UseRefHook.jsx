import { useEffect, useRef, useState } from "react";

export const UseRefHook = () => {
  const [firstName, setFirstName] = useState("asdasd");
  const firstNameInput = useRef(null);
  useEffect(() => {
    // firstNameInput.current.value = firstName;
    // firstNameInput.value = firstName;
    if (firstNameInput.current) {
      firstNameInput.current.addEventListener("change", changeHandler);
    }
    return () => {
      firstNameInput.current.removeEventListener("change", changeHandler);
    };
  });
  const changeHandler = (e) => {
    console.log(e)
    firstNameInput.value = e.target.value;
    setFirstName(e.target.value);
  };
  return (
    <form>
      <h1>{firstName}</h1>
      <label htmlFor="firstName">FirstName: </label>
      <input
        ref={firstNameInput}
        className="border p-2 rounded-2xl"
        type="text"
        id="firstName"
        placeholder="enter your name"
      />
    </form>
  );
};
