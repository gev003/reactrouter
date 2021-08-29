import React, { useState, useEffect, useReducer, useRef } from "react";
import "./App.scss";
import {
  Link,
  NavLink,
  useLocation,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
    textDecoration: "none",
  };

  const { pathname } = useLocation();

  return (
    <nav>
      <Link to="/" style={navStyle}>
        <img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"></img>
      </Link>
      <ul className="nav-links">
        <Link to="/about" style={{textDecoration: "none",}}>
          <li style={{ color: pathname === "/about" ? "red" : "" }}>About</li>
        </Link>
        <NavLink to="/shop" style={{textDecoration: "none",}}>
          <li style={{ color: pathname === "/shop" ? "red" : "" }}>Shop</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
