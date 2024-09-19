import { Row } from "react-bootstrap";
import "./Login.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function LogIn() {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const { login, IsAuth } = useAuth();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) login(email, password);
  }
  useEffect(
    function () {
      if (IsAuth) navigate("/shop", { replace: true });
    },
    [IsAuth, navigate]
  );
  return (
    <>
      {" "}
      <button onClick={() => navigate("/")} className="backBtn">
        {" "}
        &larr; Back
      </button>
      <main className="login">
        <form onSubmit={handleSubmit}>
          <Row>
            {" "}
            <label>EmailAddress</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </Row>
          <Row>
            {" "}
            <label htmlFor="">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </Row>
          <button className="loginBtn">Login</button>
        </form>
      </main>
    </>
  );
}

export default LogIn;
