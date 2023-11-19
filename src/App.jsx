import './App.css'
import BooksList from './components/BooksList';
import Form from './components/Form';
import Header from './components/Header';

function App() {

  return (
    <>
    <Header />
    <Form />
    <div className="container">
    <BooksList>To-Buy</BooksList>
    <BooksList>To-Read</BooksList>
    <BooksList>Already Read</BooksList>
    </div>
    </>
  )
}

export default App;
