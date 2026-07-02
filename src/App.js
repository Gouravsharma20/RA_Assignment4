import "./styles.css";

import BookContext from "./Context/BookContext.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";

import Nav from "./Nav.js";

import Home from "./Pages/Home.jsx";

import AddBook from "./Pages/AddBook.jsx";

const initialBooks = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    status: "Read",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    status: "Read",
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    status: "Unread",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    status: "Read",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    status: "Unread",
  },
  {
    title: "Ikigai",
    author: "Héctor García & Francesc Miralles",
    status: "Read",
  },
  {
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    status: "Unread",
  },
  {
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    status: "Read",
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    status: "Unread",
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    status: "Read",
  },
];

export default function App() {
  const [allBooks, setAllBooks] = useState(() => {
    const storedBooks = localStorage.getItem("allBooks");
    return storedBooks ? JSON.parse(storedBooks) : initialBooks;
  });

  useEffect(() => {
    localStorage.setItem("allBooks", JSON.stringify(allBooks));
  }, [allBooks]);

  function addBook(newBook) {
    setAllBooks((prev) => [...prev, newBook]);
  }

  function deleteBook(bookToDelete) {
    setAllBooks((prev) => prev.filter((book) => book !== bookToDelete));
  }

  function toggleRead(bookToToggle) {
    setAllBooks((prev) =>
      prev.map((book) =>
        book === bookToToggle
          ? { ...book, status: book.status === "Read" ? "Unread" : "Read" }
          : book
      )
    );
  }

  return (
    <BookContext.Provider value={{ allBooks, addBook, deleteBook, toggleRead }}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addAbook" element={<AddBook />} />
        </Routes>
      </BrowserRouter>
    </BookContext.Provider>
  );
}
