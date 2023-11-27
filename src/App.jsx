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
      setFavoritesBooks([id, ...favoritesBooks]);
    } else {
      setFavoritesBooks(favoritesBooks.filter((book) => book !== id));
    }
  };

  const removeFromFavorites = (id) => {
    if (favoritesBooks.includes(id)) {
      setFavoritesBooks(favoritesBooks.filter((book) => book != id));
    }
  };

  const addBook = (newBook) => {
    newBook.id = Date.now();
    console.log("Adding book:", newBook);
    setBooksData([...booksData, newBook]);
    console.log(booksData);
  }

  return (
    <>
      <Header />
      <Form addBook={addBook}/>
      <div className="container">
        <BooksList
          key={1}
          booksData={booksData}
          deleteBook={deleteBook}
          addToFavorites={addToFavorites}
          favoritesBooks={favoritesBooks}
          removeFromFavorites={removeFromFavorites}
        >
          To-Buy
        </BooksList>
        <BooksList
          key={2}
          booksData={booksData}
          deleteBook={deleteBook}
          addToFavorites={addToFavorites}
          favoritesBooks={favoritesBooks}
          removeFromFavorites={removeFromFavorites}
        >
          To-Read
        </BooksList>
        <BooksList
          key={3}
          booksData={booksData}
          deleteBook={deleteBook}
          addToFavorites={addToFavorites}
          favoritesBooks={favoritesBooks}
          removeFromFavorites={removeFromFavorites}
        >
          Already-Read
        </BooksList>
      </div>
    </>
  );
}

export default App;
