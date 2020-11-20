import React from "react";
import "./CartIcon.scss";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";
import { ReactComponent as ShoppingBagIcon } from "../../assets/bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingBagIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount, 
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
