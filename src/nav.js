import React, { useState, useEffect, useReducer, useRef } from "react";
import "./App.css";
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
  };

  const { pathname } = useLocation();

  return (
    <nav>
      <Link to="/">
        <h3 style={{ color: pathname === "/" ? "#fff" : "" }}>Logo</h3>
      </Link>
      <ul className="nav-links">
        <Link to="/about">
          <li style={{ color: pathname === "/about" ? "#fff" : "" }}>About</li>
        </Link>
        <NavLink to="/shop" activeClassName="activeLi">
          <li>Shop</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
