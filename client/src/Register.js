import "./Register.css";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    axios.post("http://localhost:3000/register", {
      username: user,
      password: password,
      email_id: email,
    });
  };
  return (
    <div className="container">
      <div className="log">
        <h1>Register</h1>
        <div>
          <label>USER NAME </label>
          <input
            className="textbox"
            type="text"
            placeholder="user name"
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div>
          <label>PASSWORD </label>
          <input
            className="textbox"
            type="text"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>EMAIL ID </label>
          <input
            className="textbox"
            type="text"
            placeholder="email id"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit} className="submit-button">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Register;
