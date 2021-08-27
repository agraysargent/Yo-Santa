import React from "react";
import "./css/nav.css";

function Nav(props) {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="#" onClick={() => props.setPage("Checkout")}>
            Checkout
          </a>
        </li>
        <li>
          <a href="#" onClick={() => props.setPage("Packages")}>
            Packages
          </a>
        </li>
        <li>
          <a href="#" onClick={() => props.setPage("Home")}>
            Home
          </a>
        </li>
        <li>
          <a href="#" onClick={() => props.setPage("Winter")}>
            Winter
          </a>
        </li>
        <li>
          <a href="#" onClick={() => props.setPage("Summer")}>
            Summer
          </a>
        </li>
        <li>
          <a href="#" onClick={() => props.setPage("Fall")}>
            Fall
          </a>
        </li>
        <li>
          <a href="#" onClick={() => props.setPage("Spring")}>
            Spring
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
