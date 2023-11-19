import { IoIosCheckboxOutline } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";

function Book() {
  return (
    <div className="book">
    <p>Lorem ipsum</p>
    <div className="book-buttons">
    <button className="book-btn"><IoIosCheckboxOutline /></button>
    <button className="book-btn"><IoIosHeartEmpty /></button>
    </div>
    </div>
  )
}

export default Book