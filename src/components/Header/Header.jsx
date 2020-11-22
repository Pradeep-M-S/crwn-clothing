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
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user-selector";
import { selectCartDropdownHidden } from "../../redux/cart/cart-selectors";
const Header = ({ currentUser, cartDropdownHidden }) => {
  return (
    <div className="header">
      <IconContext.Provider value={{ size: "40px", color: "#214252" }}>
        <Link to="/" className="logo-container">
          <GrCatalogOption />{" "}
          <div  className="option">
            Crwn Clothing
          </div>
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartDropdownHidden: selectCartDropdownHidden,
});

export default connect(mapStateToProps)(Header);
