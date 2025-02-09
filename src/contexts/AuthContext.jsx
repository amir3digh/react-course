import { createContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [errors, setErrors] = useState();

  // we can use useEffect hook in context
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    // Get user profile using API
  }
  const login = async (formData) => {
    console.log(formData);
    // API Call goes here ---->
    // const response = await loginApi(formData)
    // const response = fetch("/login", formData);
    // if (response.status !== 200) {
    //   setErrors((prev) => [...prev, "something went wrong"]);
    // } else {
    //   const userData = await response.json()
    //   setUser(userData)
    // }
    // const user = response.data;
    setUser(formData);
  };
  const register = async (formData) => {
    // Register codes goes here...
  };
  const refreshToken = async () => {
    // regenerates auth token
  };
  return (
    <AuthContext.Provider value={{ login, register, user, setUser, errors }}>
      {children}
    </AuthContext.Provider>
  );
};

/* 
    {
        user: {mobile: "...", firstName: "..."},
        setUser: set state function
    }
*/

export { AuthContextProvider, AuthContext };
