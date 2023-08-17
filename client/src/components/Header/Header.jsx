// We import 3 hooks
// useEffect - To perform mounting, updating, unmount
// useState - To change state
// useContext - This is used to along with createContext to bypass prop drilling
import { useEffect, useState, useContext } from "react";
// We import useNavigate hook from react-router-dom
// This is used to navigate one page to another
// on a click btn, text or img
import { useNavigate } from "react-router-dom";

// These icons have been imported from https://react-icons.github.io/react-icons/
// These component are used to access components
// Like on clicking cart icon cart component should appear
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

// We import functions decalared in respective folders
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
// We import the Context func we created in context.js file
// Any state change made ther is supposed to be reflected here
import { Context } from "../../utils/context";

import "./Header.scss";

const Header = () => {
  const { cartCount } = useContext(Context);
  const navigate = useNavigate(); // NAVIGATE TO HOME
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <li
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </li>
            <li
              onClick={(e) => {
                window.scrollTo({
                  top: document.querySelector("#clabout").offsetTop,
                  behavior: "smooth",
                });
              }}
            >
              About
            </li>
            <li
              onClick={(e) => {
                window?.scrollTo({
                  top: document?.querySelector("#clcategories")?.offsetTop,
                  behavior: "smooth",
                });
              }}
            >
              Categories
            </li>
          </ul>
          <div
            className="center"
            onClick={() => {
              navigate("/");
            }}
          >
            Fresh Cart Express
          </div>
          <div className="right">
            <AiOutlineSearch onClick={() => setShowSearch(true)} />
            <span className="cart-icon" onClick={() => setShowCart(true)}>
              <AiOutlineShoppingCart />
              <span>{cartCount}</span>
            </span>
          </div>
        </div>
      </header>
      {showCart && <Cart setShowCart={setShowCart}></Cart>}
      {showSearch && <Search setShowSearch={setShowSearch}></Search>}
    </>
  );
};

export default Header;
