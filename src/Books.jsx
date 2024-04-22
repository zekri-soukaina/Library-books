import { Category } from "./Category";

export const Books = ({ books, borrowBook, returnBook }) => {
  // Filter books with "Programming" in thier categoryu attribute
  const programmingBooks = books.filter(
    (book) => book.category === "programming"
  );

  return (
    <div>
      <h2>Books ({books.length})</h2>

      <Category
        title="Programming"
        books={programmingBooks}
        borrowBook={borrowBook}
        returnBook={returnBook}
      />
    </div>
  );
};
