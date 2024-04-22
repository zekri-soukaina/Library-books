import "./Book.css";
import "./App.css";

export const Book = ({ book, borrowBook, returnBook }) => {
  return (
    <div>
      <hr />
      <h4>{book.title} 📖</h4>
      <p>Author: {book.author} ✍</p>
      {book.available ? (
        <button
          className="button"
          type="button"
          onClick={() => borrowBook(book.id)}>
          Borrow ⇩
        </button>
      ) : (
        <button type="button" onClick={() => returnBook(book.id)}>
          Return ⏎
        </button>
      )}
    </div>
  );
};
