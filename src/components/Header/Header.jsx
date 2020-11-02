import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utility";
import { AiFillHome, AiTwotoneShopping } from "react-icons/ai";
import { GoSignIn, GoSignOut } from "react-icons/go";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
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
      </div>
    </div>
  );
};

export default Header;
