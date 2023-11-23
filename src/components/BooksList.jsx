import BookItem from "./BookItem";

function BooksList({
  children,
  booksData,
  deleteBook,
  addToFavorites,
  favoritesBooks,
}) {

  if (!booksData || booksData.length === 0) {
    return <h3>No Books Yet</h3>;
  }

  //Filter the books based on their state
  const filteredBooks = booksData.filter((book) => book.state === children);

  return (
    <>
      <div className="books-list">
        <h2>{children}</h2>
        {filteredBooks.map((book) => {
          return (
            <>
              <BookItem
                key={book.id}
                text={book.bookName}
                deleteBook={() => deleteBook(book.id)}
                addToFavorites={() => addToFavorites(book.id)}
                favoritesBooks={favoritesBooks}
                bookId={book.id}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default BooksList;
