import { IoIosCheckboxOutline } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoTrashBinOutline } from "react-icons/io5";

function BookButtons() {

  return (
    <div className="book-buttons">
    <button className="book-btn">
      <IoIosCheckboxOutline />
    </button>
    <button className="book-btn">
      <IoIosHeartEmpty />
    </button>
    <button className="book-btn">
      <IoTrashBinOutline />
    </button>
  </div>
  )
}

export default BookButtons