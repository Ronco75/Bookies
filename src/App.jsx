import { useState } from 'react';
import './App.css'
import BooksList from './components/BooksList';
import Form from './components/Form';
import Header from './components/Header';
import BooksData from './BooksData';

function App() {

  const [booksData, setBooksData] = useState(BooksData);

  return (
    <>
    <Header />
    <Form />
    <div className="container">
    <BooksList booksData={booksData}>To-Buy</BooksList>
    <BooksList>To-Read</BooksList>
    <BooksList>Already Read</BooksList>
    </div>
    </>
  )
}

export default App;
