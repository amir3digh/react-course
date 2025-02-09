import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return <div className="text-xl">Hi, {user?.mobile}</div>;
};

export default UserProfile;
