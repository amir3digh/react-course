import { useState } from "react";

function Exercise01(props) {
  const changeHandler = (event) => {
    props.setFirstName(event.target.value);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h1>{props.firstName || "Unknown User"}</h1>
      <div className="flex-1 flex items-center gap-3 w-screen justify-center">
        <label htmlFor="firstName">First Name: </label>
        <input
          className="p-2 rounded-lg"
          placeholder="type your name"
          id="firstName"
          name="firstName"
          type="text"
          value={props.firstName}
          onChange={changeHandler}
        />
      </div>
    </div>
  );
}

export default Exercise01;
