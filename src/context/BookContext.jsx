import { createContext, useState } from "react";
import BooksData from "../BooksData";

const BookContext = createContext();

export const BookProvider = ({ children }) => {

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
  }

    return <BookContext.Provider value={{
      booksData,
      setBooksData,
      favoritesBooks,
      setFavoritesBooks,
      deleteBook,
      addToFavorites,
      removeFromFavorites,
      addBook
    }}>
    {children}
    </BookContext.Provider>
}

export default BookContext;