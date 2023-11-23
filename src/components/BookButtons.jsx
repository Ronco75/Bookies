import {
  IoIosHeartEmpty,
  IoIosHeart,
  IoIosCheckboxOutline,
} from "react-icons/io";
import { IoTrashBinOutline } from "react-icons/io5";

function BookButtons({ deleteBook, addToFavorites, favoritesBooks, bookId }) {

  const isFavorite = favoritesBooks.includes(bookId);

  return (
    <div className="book-buttons">
      <button className="book-btn">
        <IoIosCheckboxOutline />
      </button>
      <button
        className={`book-btn ${isFavorite ? "favorite" : ""}`}
        onClick={() => addToFavorites(bookId)}
      >
      {/*//!why it's not working ?!?!? */}
        {isFavorite ? <IoIosHeart /> : <IoIosHeartEmpty />}
      </button>
      <button onClick={deleteBook} className="book-btn">
        <IoTrashBinOutline />
      </button>
    </div>
  );
}

export default BookButtons;
