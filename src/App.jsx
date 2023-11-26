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
    removeFromFavorites(id);
  };

  const addToFavorites = (id) => {
    if (!favoritesBooks.includes(id)) {
      if (favoritesBooks.length < 5) {
        setFavoritesBooks([id, ...favoritesBooks]);
        console.log(favoritesBooks);
      } else {
        alert("You can only have up to 5 favorite books.");
      }
    } else {
      setFavoritesBooks(favoritesBooks.filter((book) => book !== id));
    }
  };

  const removeFromFavorites = (id) => {
    if (favoritesBooks.includes(id)) {
      setFavoritesBooks(favoritesBooks.filter((book) => book != id));
      console.log(favoritesBooks);
    }
  }

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
          removeFromFavorites={removeFromFavorites}
        >
          To-Buy
        </BooksList>
        <BooksList
          booksData={booksData}
          deleteBook={deleteBook}
          addToFavorites={addToFavorites}
          favoritesBooks={favoritesBooks}
          removeFromFavorites={removeFromFavorites}
        >
          To-Read
        </BooksList>
        <BooksList
          booksData={booksData}
          deleteBook={deleteBook}
          addToFavorites={addToFavorites}
          favoritesBooks={favoritesBooks}
          removeFromFavorites={removeFromFavorites}
        >
          Already Read
        </BooksList>
      </div>
    </>
  );
}

export default App;
