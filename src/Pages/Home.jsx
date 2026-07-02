import BookContext from "../Context/BookContext.jsx";
import { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Home() {
  const { allBooks, deleteBook, toggleRead } = useContext(BookContext);
  const [filter, setFilter] = useState("all");
  const filteredBooks = allBooks.filter((book) => {
    if (filter === "all") {
      return true;
    }
    return book.status === filter;
  });

  function getHeading() {
    if (filter === "Read") {
      return "List of Read Books";
    }
    if (filter === "Unread") {
      return "List of Unread Books";
    }
    return "List of All Books";
  }

  return (
    <div className="bg-dark text-light">
      <div className="px-5">
        <h1>
          {getHeading()} [{filteredBooks.length}]
        </h1>
        <button className="px-5" onClick={() => setFilter("all")}>
          All Books
        </button>
      </div>

      <>
        <h2 className="px-5">
          Read Books ({allBooks.filter((book) => book.status === "Read").length}
          )<button onClick={() => setFilter("Read")}>Read Books</button>
        </h2>
      </>

      <h2 className="px-5">
        Unread Books (
        {allBooks.filter((book) => book.status === "Unread").length})
        <button onClick={() => setFilter("Unread")}>Unread Books</button>
      </h2>

      <ul>
        {filteredBooks.map((book, index) => {
          return (
            <div
              className="card bg-dark text-light"
              style={{ width: "18rem" }}
              key={index}
            >
              <div className="card-body">
                <h3 className="card-title">{book.title}</h3>
                <p className="card-text">Book Author : {book.author}</p>
                <p className="card-text">Book Status : {book.status}</p>
                <div
                  className="btn btn-primary"
                  onClick={() => deleteBook(book)}
                >
                  Delete book
                </div>
                <div className="mb-3 form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id={`switch-${index}`}
                    checked={book.status === "Read"}
                    onChange={() => toggleRead(book)}
                  />
                  <label
                    className="form-check-label "
                    htmlFor={`switch-${index}`}
                  >
                    {book.status}
                  </label>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
