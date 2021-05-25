import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const handleLogin = () => {
    if ((username === "admin") & (password === "password")) {
      setLoginStatus(true);
    } else {
      console.log("user  is loggin in");
    }
  };
  return (
    <div className="container">
      <div className="log">
        <div>
          <label>USER NAME</label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>PASSWORD</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleLogin}>SUBMIT</button>
        </div>
        <a href="#hjashj">register</a>
        <Link to="/register">REGISTER</Link>
      </div>
    </div>
  );
};

export default Login;
