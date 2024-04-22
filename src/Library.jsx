import { useState } from "react";
import { collection } from "./collection";
import { Books } from "./Books";
import "./App.css";

export default () => {
  const [books, setBooks] = useState(collection.books);

  const borrowBook = (id) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, available: false } : book
      )
    );
  };

  const returnBook = (id) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, available: true } : book
      )
    );
  };

  // const borrowBook = (id) => {
  //   const newBooks = books.map((book) => {
  //     if (book.id === id) {
  //       book.available = false;
  //     }
  //     return book;
  //   });
  //   setBooks(newBooks);
  // };

  // const returnBook = (id) => {
  //   const newBooks = books.map((book) => {
  //     if (book.id === id) {
  //       book.available = true;
  //     }
  //     return book;
  //   });
  //   setBooks(newBooks);
  // };

  return (
    <div className="App">
      <h1>Library</h1>
      <Books books={books} borrowBook={borrowBook} returnBook={returnBook} />
    </div>
  );
};
