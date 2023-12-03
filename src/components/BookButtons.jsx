import {
  IoIosHeartEmpty,
  IoIosHeart,
  IoIosCheckboxOutline,
} from "react-icons/io";
import { IoTrashBinOutline } from "react-icons/io5";

function BookButtons({
  deleteBook,
  addToFavorites,
  favoritesBooks,
  bookId,
  removeFromFavorites,
  transferToAnotherList,
}) {
  const isFavorite = favoritesBooks.includes(bookId);

  return (
    <div className="book-buttons">
      <button className="book-btn">
        <IoIosCheckboxOutline onClick={transferToAnotherList} />
      </button>
      <button
        className="book-btn"
        onClick={
          isFavorite
            ? () => removeFromFavorites(bookId)
            : () => addToFavorites(bookId)
        }
      >
        {isFavorite ? <IoIosHeart /> : <IoIosHeartEmpty />}
      </button>
      <button onClick={deleteBook} className="book-btn">
        <IoTrashBinOutline />
      </button>
    </div>
  );
}

export default BookButtons;
