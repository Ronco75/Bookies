import BookItem from "./BookItem";

function BooksList({
  children,
  booksData,
  deleteBook,
  addToFavorites,
  favoritesBooks,
  removeFromFavorites,
}) {


  //Filter the books based on their state
  const filteredBooks = booksData.filter((book) => book.state === children);
  const hasBooks = filteredBooks.length > 0;

  return (
    <>
      <div className={`books-list ${hasBooks ? "with-border" : ""}`}>
        <div className="title">
        <h2>{children}</h2>
        <small>{filteredBooks.length}</small>
        </div>
        {filteredBooks.length === 0 ? (
          <p>Please Add Books !</p>
        ) : (
          filteredBooks.map((book) => {
            return (
              <>
                <BookItem
                  key={book.id}
                  text={book.bookName}
                  deleteBook={() => deleteBook(book.id)}
                  addToFavorites={() => addToFavorites(book.id)}
                  favoritesBooks={favoritesBooks}
                  bookId={book.id}
                  removeFromFavorites={() => removeFromFavorites(book.id)}
                />
              </>
            );
          })
        )}
      </div>
    </>
  );
}

export default BooksList;
