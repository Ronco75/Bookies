import { useState } from "react";
import "./App.css";
import BooksList from "./components/BooksList";
import Form from "./components/Form";
import Header from "./components/Header";
import BooksData from "./BooksData";
import { v4 as uuidv4 } from "uuid";

  // TODO: Add LocalStorage;
  // TODO: Add Route to Favorites Books;
  // TODO: Add Dark/Light Mode;

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
    newBook.id = uuidv4();
    console.log("Adding book:", newBook);
    setBooksData([...booksData, newBook]);
  };

  const transferToAnotherList = (book) => {
    const currentStatus = book.status;
    let newStatus = "";

    switch (currentStatus) {
      case "To-Buy":
        newStatus = "To-Read";
        break;
      case "To-Read":
        newStatus = "Already-Read";
        break;
      case "Already-Read":
        deleteBook(book.id);
        return;
      default:
        break;
    }

    const updatedBooksData = booksData.map((b) =>
      b.id === book.id ? { ...b, status: newStatus } : b
    );

    setBooksData(updatedBooksData);
  };

  return (
    <>
      <Header />
      <Form addBook={addBook} />
      <div className="container">
        <BooksList
          key={1}
          booksData={booksData}
          deleteBook={deleteBook}
          addToFavorites={addToFavorites}
          favoritesBooks={favoritesBooks}
          removeFromFavorites={removeFromFavorites}
          transferToAnotherList={transferToAnotherList}
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
          transferToAnotherList={transferToAnotherList}
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
          transferToAnotherList={transferToAnotherList}
        >
          Already-Read
        </BooksList>
      </div>
    </>
  );
}

export default App;
