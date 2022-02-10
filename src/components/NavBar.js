import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to='/movies'>Movies</NavLink>
      <NavLink to='/directors'>Directors</NavLink>
      <NavLink to='/actors'>Actors</NavLink>
      <NavLink exact to='/'>Home</NavLink>
    </nav>
  )
}

export default NavBar;
