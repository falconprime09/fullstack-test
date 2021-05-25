import "./Header.css";
import Body from "./Body";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const Header = () => {
  return (
    <div className="navbar">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link>CATEGORY</Link>
            </li>
            <li>
              <Link to="/login">LOGIN</Link>
            </li>
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
    </div>
  );
};
export default Header;
