import Book from "./Book";

function BooksList({ children }) {
  return (<>
  <div className="books-list">
        <h2 style={{margin: '1rem',
         borderBottom: '2px solid black',
         textAlign: 'center'}}>{children}</h2>
        <Book />
        <Book />
  </div>
        </>
    )
}

export default BooksList