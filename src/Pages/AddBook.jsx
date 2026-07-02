import { useContext, useState } from "react";

import BookContext from "../Context/BookContext.jsx";

export default function AddBook() {
  const { addBook } = useContext(BookContext);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isRead, setIsRead] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    addBook({ title, author, status: isRead ? "Read" : "Unread" });
    setTitle(""), setAuthor(""), setIsRead(false);
  }

  return (
    <div className="bg-dark text-light min-vh-100">
      <div className="app">
        <h1>Add a Book</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="bookTitle" className="form-label">
              Book Title
            </label>
            <input
              type="text"
              className="form-control"
              id="booktitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="bookAuthor" className="form-label">
              Book Author
            </label>
            <input
              type="text"
              className="form-control"
              id="bookauthor"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div className="mb-3 form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switchCheckDefault"
              checked={isRead}
              onChange={(e) => setIsRead(e.target.checked)}
            />
            <label className="form-check-label " htmlFor="switchCheckDefault">
              mark as read
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}
