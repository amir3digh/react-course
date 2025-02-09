import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

const HomePage = ({ theme, children }) => {
  const { user } = useContext(AuthContext);
  return (
    <div
      className={`${
        theme === "dark" ? "text-white" : "text-gray-900"
      } flex flex-col`}
    >
      <h1>Home Page</h1>
      {user && "User Phone number is: " + user.mobile}
      {children}
    </div>
  );
};

export default HomePage;
