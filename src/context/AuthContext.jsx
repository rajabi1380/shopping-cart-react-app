import { createContext, useContext, useReducer } from "react";
const initialState = { IsAuth: false };
function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, IsAuth: true };
    case "logout":
      return { ...state, IsAuth: false };

    default:
      break;
  }
}
const IsAuthContext = createContext();
function AuthContext({ children }) {
  const [{ IsAuth }, dispatch] = useReducer(reducer, initialState);
  const FAKE_USER = {
    name: "Jack",
    email: "jack@example.com",
    password: "qwerty",
    avatar: "https://i.pravatar.cc/100?u=zz",
  };
  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login" });
  }
  function logout() {
    dispatch({ type: "logout" });
  }
  return (
    <IsAuthContext.Provider value={{ login, IsAuth, logout }}>
      {children}
    </IsAuthContext.Provider>
  );
}
function useAuth() {
  const context = useContext(IsAuthContext);
  return context;
}

export { AuthContext, useAuth };
