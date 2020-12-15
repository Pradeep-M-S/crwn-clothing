import React, { useState } from "react";
import { connect } from "react-redux";
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
import { signOutStart } from "../../redux/user/user-actions"
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  HamburgerContainer, MenuContainer
} from "./Header.styles";
import { Twirl as Hamburger } from 'hamburger-react'

const Header = ({ currentUser, cartDropdownHidden, signOutStart }) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <HeaderContainer>
      <IconContext.Provider value={{ size: "40px", color: "#214252" }}>
        <LogoContainer to="/">
          <GrCatalogOption /> <div className="option">Crwn Clothing</div>
        </LogoContainer>{" "}
      </IconContext.Provider>
      <OptionsContainer>
        {" "}
        <OptionLink to="/">
          <AiFillHome className="react-icons-header" />
          Home
        </OptionLink>
        <OptionLink to="/shop">
          {" "}
          <AiTwotoneShopping className="react-icons-header" />
          Shop
        </OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={signOutStart}>
            <GoSignOut className="react-icons-header" />
            Sign Out
          </OptionLink>
        ) : (
            <OptionLink to="/signinandsignup">
              {" "}
              <GoSignIn className="react-icons-header" />
            Sign In
            </OptionLink>
          )}
        <CartIcon />
      </OptionsContainer>
      <HamburgerContainer>
        <Hamburger size={28} toggled={isOpen} toggle={setOpen} />
        {
          isOpen ?
            <MenuContainer>
              <OptionLink to="/" onClick={() => setOpen(false)}>
                Home
        </OptionLink>
              <OptionLink to="/shop" onClick={() => setOpen(false)}>
                {" "}
          Shop
        </OptionLink> <OptionLink to="/checkout" onClick={() => setOpen(false)}>
                {" "}
          Checkout
        </OptionLink>
              {currentUser ? (
                <OptionLink as="div" onClick={signOutStart}>
                  Sign Out
                </OptionLink>
              ) : (
                  <OptionLink to="/signinandsignup" onClick={() => setOpen(false)}>
                    {" "}
            Sign In
                  </OptionLink>
                )}
            </MenuContainer>
            : null
        }
      </HamburgerContainer>
      {cartDropdownHidden ? null : <CartDropDown />}
    </HeaderContainer >
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartDropdownHidden: selectCartDropdownHidden,
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
