import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="navbar">
      <Link
        className="navbar__title navbar__item"
        to={"/"}
        style={{ textDecoration: "none", color: "white" }}
      >
        Welcome
      </Link>
      <Link
        className="navbar__item"
        to={"/"}
        style={{ textDecoration: "none", color: "white" }}
      >
        Blogs
      </Link>
      <Link
        className="navbar__item"
        to={"/AddBlog"}
        style={{ textDecoration: "none", color: "white" }}
      >
        Want to write One?
      </Link>
    </header>
  );
};

export default Navbar;
