import BookItem from "./BookItem";

function BooksList({ children, booksData }) {

  if (!booksData || booksData.length === 0) {
    return <h3>No Books Yet</h3>
  }

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
          {booksData.map((book) => {
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
