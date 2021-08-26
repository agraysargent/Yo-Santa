import React from "react";

function Nav(props) {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a
            className=""
            aria-current="page"
            onClick={() => props.setPage("Home")}
            href="#"
          >
            Home
          </a>
        </li>
        <li>
          <a href="#" onClick={() => props.setPage("Packages")}>
            Packages
          </a>
        </li>
        <li>
          <a onClick={() => props.setPage("Checkout")} href="#">
            Checkout
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
