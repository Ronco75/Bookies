import BookItem from "./BookItem";

function BooksList({ children, booksData }) {

  if (!booksData || booksData.length === 0) {
    return <h3>No Books Yet</h3>
  }

  //Filter the books based on their state
  const filteredBooks = booksData.filter((book) => book.state === children);

  return (
    <>
      <div className="books-list">
        <h2
          style={{
            margin: "auto",
            borderBottom: "2px solid #fff",
            textAlign: "center",
          }}
        >
          {children}
        </h2>
          {filteredBooks.map((book) => {
            return <>
            <BookItem key={book.id}
            text={book.bookName}
            />
            </>
          })}
      </div>
    </>
  );
}

export default BooksList;
