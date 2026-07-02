import React from "react";
import { useContext } from "react";

import { Link } from "react-router-dom";

import BookContext from "./Context/BookContext.jsx";

export default function Nav() {
  const { allBooks } = useContext(BookContext);
  return (
    <nav className="bg-dark text-light">
      <Link to="/" className="nav-link">
        All Books [{allBooks.length}]
      </Link>
      <div className="links">
        <Link to="/addAbook" className="nav-link">
          Add Books
        </Link>
      </div>
    </nav>
  );
}
