import { IoIosHeartEmpty } from "react-icons/io";

function Header() {
  return (
    <header>
            <h1>My Books</h1>
            <div>
            <button className="fav-btn">Favorites <i><IoIosHeartEmpty /></i></button>
            </div>
    </header>
  )
}

export default Header