import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import image from "../../img/pokemonTitle.png";

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <Link to="/home">
        <button className={styles.primarybutton}>Home</button>
      </Link>
      <img src={image} alt="" width="200px" height="65px" />
      <Link to="/create">
        <button className={styles.primarybutton}>Crear Pokemon</button>
      </Link>
    </nav>
  );
};

export default NavBar;
