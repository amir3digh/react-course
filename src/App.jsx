import "./App.css";
import HomePage from "./HomePage";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <HomePage theme={"dark"}>
        <UserProfile />
        <LoginForm />
      </HomePage>
    </AuthContextProvider>
  );
}

export default App;
