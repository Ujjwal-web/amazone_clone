import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log("HI", user);

  const handleAuthen = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header_search">
        <input className="header_searchinput" type="input"></input>
        <SearchIcon className="header_searchicon"></SearchIcon>
      </div>

      <div className="header_nav">
        <Link to={!user?.email && "/login"}>
          <div className="header_options" onClick={handleAuthen}>
            <span className="header_option1">
              Hello{" "}
              {user
                ? user.email.substring(0, user.email.lastIndexOf("@"))
                : "Guest"}
            </span>
            <span className="header_option2">
              {user ? "Signout" : "Signin"}
            </span>
          </div>
        </Link>

        <div className="header_options">
          <span className="header_option1">Return</span>
          <span className="header_option2">Orders</span>
        </div>
        <div className="header_options">
          <span className="header_option1">Your</span>
          <span className="header_option2">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionsbasket">
            <ShoppingBasketIcon></ShoppingBasketIcon>
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
