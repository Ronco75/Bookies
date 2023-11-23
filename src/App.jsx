import { useState } from "react";
import "./App.css";
import BooksList from "./components/BooksList";
import Form from "./components/Form";
import Header from "./components/Header";
import BooksData from "./BooksData";

function App() {
  const [booksData, setBooksData] = useState(BooksData);
  const [favoritesBooks, setFavoritesBooks] = useState([]);

  const deleteBook = (id) => {
    setBooksData(booksData.filter((book) => book.id !== id));
  };

  const addToFavorites = (id) => {
    if (!favoritesBooks.includes(id)) {
      if (favoritesBooks.length < 5) {
        setFavoritesBooks([id, ...favoritesBooks]);
      } else {
        alert("You can only have up to 5 favorite books.");
      }
    } else {
      alert("This book is already in your favorites.");
    }
  };

  return (
    <>
      <Header />
      <Form />
      <div className="container">
        <BooksList
          booksData={booksData}
          deleteBook={deleteBook}
          addToFavorites={addToFavorites}
          favoritesBooks={favoritesBooks}
        >
          To-Buy
        </BooksList>
        <BooksList
          booksData={booksData}
          deleteBook={deleteBook}
          addToFavorites={addToFavorites}
          favoritesBooks={favoritesBooks}
        >
          To-Read
        </BooksList>
        <BooksList
          booksData={booksData}
          deleteBook={deleteBook}
          addToFavorites={addToFavorites}
          favoritesBooks={favoritesBooks}
        >
          Already Read
        </BooksList>
      </div>
    </>
  );
}

export default App;
