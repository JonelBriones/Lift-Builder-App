import React from "react";
import { Link, useParams } from "react-router-dom";

import "./navbar.css";
import Icon from "@mdi/react";
import { mdiAccountCircle } from "@mdi/js";
const Navbar = () => {
  const { page } = useParams();
  console.log(page);
  const color = page == "main" ? "absolute white" : "";
  return (
    <nav className={`navbar ${color}`}>
      {page == "main" ? (
        <Link to={"/main"}>Main</Link>
      ) : (
        <Link to={"/main"}>Go back</Link>
      )}
      <Link to={"/main/profile"}>
        <Icon path={mdiAccountCircle} size={1.5} />
      </Link>
    </nav>
  );
};

export default Navbar;
