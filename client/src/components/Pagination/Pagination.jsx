import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ pokemonsPerPage, allPokemons, pagination }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={styles.list}>
        {pageNumbers?.map((number) => (
          <li className={styles.buttonborders} key={number}>
            <a
              className={styles.primarybutton}
              onClick={() => pagination(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
