import { createContext, useState } from "react";
import BooksData from "../BooksData";


const BookContext = createContext();

export const DataProvider = ({ children }) => {

  const [booksData, setBooksData] = useState(BooksData);

  const handleDelete = () => {
    console.log('id');
    // setBooksData(booksData.filter((book) => book.id !== id));
  }

    return <BookContext.Provider value={{
      handleDelete
    }}>
    {children}
    </BookContext.Provider>
}

export default BookContext;