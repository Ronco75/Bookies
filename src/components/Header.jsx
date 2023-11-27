import { IoIosHeartEmpty } from "react-icons/io";

function Header() {
  return (
    <header>
      <h1>My Books</h1>
      <div>
        <button className="fav-btn">
          <IoIosHeartEmpty />
          Favorites
        </button>
      </div>
    </header>
  );
}

export default Header;
