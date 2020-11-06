import React from "react";
import "./Header.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { GrCatalogOption } from "react-icons/gr";
import { auth } from "../../firebase/firebase.utility";
import { AiFillHome, AiTwotoneShopping } from "react-icons/ai";
import { GoSignIn, GoSignOut } from "react-icons/go";
import { IconContext } from "react-icons";
import CartIcon from "../CartIcon/CartIcon";
import CartDropDown from "../CartDropdown/CartDropdown";
const Header = ({ currentUser, cartDropdownHidden }) => {
  return (
    <div className="header">
      <IconContext.Provider value={{ size: "40px", color: "#214252" }}>
        <Link to="/" className="logo-container">
          <GrCatalogOption />{" "}
          <Link to="/" className="option">
            Crwn Clothing
          </Link>
        </Link>{" "}
      </IconContext.Provider>
      <div className="options">
        {" "}
        <Link className="option" to="/">
          <AiFillHome className="react-icons-header" />
          Home
        </Link>
        <Link className="option" to="/shop">
          {" "}
          <AiTwotoneShopping className="react-icons-header" />
          Shop
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            <GoSignOut className="react-icons-header" />
            Sign Out
          </div>
        ) : (
          <Link to="/signinandsignup" className="option">
            {" "}
            <GoSignIn className="react-icons-header" />
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {cartDropdownHidden ? null : <CartDropDown />}
    </div>
  );
};

const mapStateToProps = ({
  user: { currentUser },
  cart: { cartDropdownHidden },
}) => ({
  currentUser: currentUser,
  cartDropdownHidden: cartDropdownHidden,
});

export default connect(mapStateToProps)(Header);
