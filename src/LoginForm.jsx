import { useContext, useState } from "react";
import { AuthContext } from "./contexts/AuthContext";

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ mobile: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label className="text-2xl font-bold" htmlFor="mobile">
        Mobile:{" "}
      </label>
      <input
        className="border rounded-lg p-2 text-xl"
        value={formData.mobile}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, mobile: e.target.value }))
        }
        name="mobile"
        id="mobile"
        type="text"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
