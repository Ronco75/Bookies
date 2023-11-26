import BookButtons from "./BookButtons";

function Book({ text, deleteBook, addToFavorites, favoritesBooks, bookId, removeFromFavorites }) {
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
