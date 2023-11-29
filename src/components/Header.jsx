import { IoIosHeartEmpty } from "react-icons/io";

function Header() {
  return (
    <header>
      <h1>Bookies</h1>
      <div style={{color: '#00AFF5'}}>
        <button className="fav-btn form-btn">
          <IoIosHeartEmpty/>
          Favorites
        </button>
      </div>
    </header>
  );
}

export default Header;
