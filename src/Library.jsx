import { useState } from "react";
import { collection } from "./collection";

import { Books } from "./Books";
import { Category } from "./Category";
import { Book } from "./Book";

export default () => {
  const [books, setBooks] = useState(collection.books);

  // Filter books with "Programming" in thier categoryu attribute
  const programmingBooks = books.filter(
    (book) => book.category === "programming"
  );

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
      <Books amount={books.length}>
        <Category title="Programming" amount={programmingBooks.length}>
          {programmingBooks.map((book) => (
            <Book
              book={book}
              key={book.id}
              borrowBook={borrowBook}
              returnBook={returnBook}
            />
          ))}
        </Category>
      </Books>
    </div>
  );
};
