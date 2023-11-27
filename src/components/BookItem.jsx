import BookButtons from "./BookButtons";

function Book({
  text,
  deleteBook,
  addToFavorites,
  favoritesBooks,
  bookId,
  removeFromFavorites,
}) {
  
  // console.log("BookItem Props:", text, favoritesBooks, bookId);

  return (
    <div className="book">
      <strong>{text}</strong>
      <BookButtons
        deleteBook={deleteBook}
        addToFavorites={addToFavorites}
        favoritesBooks={favoritesBooks}
        bookId={bookId}
        removeFromFavorites={removeFromFavorites}
      />
    </div>
  );
}

export default Book;
