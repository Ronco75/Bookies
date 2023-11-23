import BookButtons from "./BookButtons";

function Book({ text, deleteBook, addToFavorites, favoritesBooks }) {

  return (
    <div className="book">
      <p>{text}</p>
      <BookButtons
        deleteBook={deleteBook}
        addToFavorites={addToFavorites}
        favoritesBooks={favoritesBooks}
      />
    </div>
  );
}

export default Book;
