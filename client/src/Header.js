import "./Header.css";
import Body from "./Body";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import axios from "axios";

const Header = () => {
  const [logg, setLogg] = useState("");
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get("http://localhost:3010/login").then((res) => {
      console.log(res);
      if (res.data.loggedin === true) {
        console.log(res.data.user[0].username);
        setLogg(res.data.user[0].username);
      }
    });
  });
  console.log("user is", logg);
  return (
    <div className="navbar">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/">CATEGORY</Link>
            </li>
            <li>
              <Link to="/login">LOGIN</Link>
            </li>
            <li>{logg}</li>
          </ul>
        </div>
        <input className="search-box" type="text" />
        <button className="search-botton"> SEARCH</button>
        <Switch>
          <Route exact path="/" component={Body}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
        </Switch>
      </Router>
      {logg}
    </div>
  );
};
export default Header;
