import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-book">New Book</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
