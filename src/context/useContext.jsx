import { createContext, useState } from "react";

export const Context = createContext(null);
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(()=>{
    const storedUser=localStorage.getItem("user");
    return storedUser?JSON.parse(storedUser):null;
  });
  const [token, setToken]=useState(localStorage.getItem("token")||null);
  const login=({user,token,refresh})=>{
    localStorage.setItem("token",token);
    localStorage.setItem("refresh",refresh)
    localStorage.setItem("user",JSON.stringify(user))
    setUser(user);
    setToken(token);
  }

  const logout=()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("refresh")
    localStorage.removeItem("user")
    setUser(null);
    setToken(null);
  }
  return <Context.Provider value={{user,token,login,logout,isAuth:!!token}}>{children}</Context.Provider>;
};
