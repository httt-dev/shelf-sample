import React, { useEffect, useState } from "react";
import Book from "./components/Book";
import io from 'socket.io-client';

function App() {
  const book_api = "http://localhost:8000/books/";
  const [books, setBooks] = useState([]);
  const [socket, setSocket] = useState(null)

  //socket
  useEffect(() => {
    const socket = io(`http://localhost:8000`);
    setSocket(socket);
    socket.on('on-shelf-data-changed', (data) => {
      console.log(data);
      fetch(book_api).then(res => res.json())
        .then(data => {
          console.log(data);
          setBooks(data);
        })

    })

    // return () => newSocket.close();
  }, [setSocket])

  //call api
  // useEffect(() => {
  //   fetch(book_api).then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       setBooks(data);
  //     })

  // }, []);

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
