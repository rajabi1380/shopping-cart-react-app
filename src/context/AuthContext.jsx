import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = { IsAuth: false };

function reducer(state, action) {
  switch (action.type) {
    case "login":
      localStorage.setItem("token", "User1234");
      return { ...state, IsAuth: true };
    case "logout":
      return { ...state, IsAuth: false };
    case "loggedIn":
      return { ...state, IsAuth: true };
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
  function loggedIn() {
    dispatch({ type: "loggedIn" });
  }
  useEffect(() => {
    const chechLogged = localStorage.getItem("token");
    if (chechLogged) return loggedIn();
  }, []);
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
