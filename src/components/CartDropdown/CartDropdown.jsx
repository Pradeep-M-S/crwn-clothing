import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./CartDropdown.scss";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart-selectors";
import CartItem from "../CartItem/CartItem";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import { AiFillCarryOut } from "react-icons/ai";
const CartDropDown = ({ cartItems, toggleCartHidden }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span
          style={{
            paddingTop: "25%",
            fontSize: "1rem",
            textTransform: "uppercase",
            fontWeight: "500",
            lineHeight: "1.5rem",
          }}
        >
          It's lonely in here ADD SOME items
        </span>
      )}
    </div>
    <Link to="checkout">
      {" "}
      <CustomButton onClick={() => toggleCartHidden()}>
        <AiFillCarryOut />
        CHECKOUT
      </CustomButton>
    </Link>{" "}
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartDropDown);
