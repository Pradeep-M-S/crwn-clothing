import React, { useState } from "react";
import "./CollectionItem.scss";
import CustomButton from "../CustomButton/CustomButton";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-actions";
const CollectionItem = ({ item, addItem }) => {
  const [text, setText] = useState("ADD TO CART");

  const { name, price, imageUrl } = item;

  const handleClick = () => {
    setTimeout(() => {
      setText("✔ Item Added");
    }, 300);
    setTimeout(() => {
      setText("ADD MORE ITEMS");
    }, 1000);
  };
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="price">{price}$</div>
      </div>
      <CustomButton
        onClick={() => {
          addItem(item);
          handleClick();
        }}
        className="custom-button"
        inverted={true}
      >
        {text}
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
