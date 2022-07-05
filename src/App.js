import React, { useEffect, useState } from "react";
import Book from "./components/Book";

function App() {
  const book_api = "http://localhost:8000/books/";
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(book_api).then(res => res.json())
      .then(data => {
        console.log(data);
        setBooks(data);
      })

  }, []);

  return (
    <div className="book-containter">
      {books.length > 0 && books.map((book) =>
      (
        <Book key={book.dpp_id} {...book} />
      ))}

    </div>
  );

}
export default App;
