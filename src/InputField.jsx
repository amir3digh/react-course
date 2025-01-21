const InputField = (props) => {
  const { label, placeholder, type, name, value, changeEventHandler } = props;
  const changeHandler = (event) => {
    event.preventDefault();
    changeEventHandler(event);
  };
  return (
    <div className="flex justify-between items-center gap-3">
      <label htmlFor="firstName">{label}</label>
      <input
        className="p-2 rounded-lg"
        placeholder={placeholder}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
};

export default InputField;
