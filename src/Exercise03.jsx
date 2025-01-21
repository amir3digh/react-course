import { useState } from "react";
import InputField from "./InputField";

const Exercise03 = () => {
  //   const [username, setUsername] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const formData = {
  //     username: "",
  //     password: "",
  //     email: "",
  //   };
  const [formData, setFormData] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`username is: ${username}, email is: ${email}`);
    alert(`username is: ${formData.username}, email is: ${formData.email}`);
    // fetch("/api/register", {
    //   method: "post",
    //   data: { username, email, password },
    // //   data: { username: username, email: email, password: password },
    // }).then(response => ).catch();
  };
  const usernameChangeEvent = (event) => {
    // setUsername(event.target.value);
    setFormData((previous) => {
      return {
        email: previous.email,
        password: previous.password,
        username: event.target.value,
      };
    });
    console.log(formData);
  };
  const emailChangeEvent = (event) => {
    setFormData((previous) => {
      return { ...previous, email: event.target.value };
    });
    console.log(formData);
  };
  const passwordChanegEvent = (event) => {
    setFormData((prev) => ({ ...prev, password: event.target.value }));
    console.log(formData);
  };
  return (
    <form
      method="post"
      className="flex flex-col border max-w-[400px] gap-3 px-4 py-3 rounded-xl"
      onSubmit={handleSubmit}
    >
      <h1>Register Form</h1>
      <InputField
        name={"username"}
        type={"text"}
        placeholder={"type a username"}
        label={"Username:"}
        value={formData.username}
        changeEventHandler={usernameChangeEvent}
      />
      <InputField
        name={"email"}
        type={"text"}
        placeholder={"type your email"}
        label={"Email: "}
        value={formData.email}
        changeEventHandler={emailChangeEvent}
      />
      <InputField
        name={"password"}
        type={"password"}
        placeholder={"choose a password"}
        label={"Password: "}
        value={formData.password}
        changeEventHandler={passwordChanegEvent}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Exercise03;
