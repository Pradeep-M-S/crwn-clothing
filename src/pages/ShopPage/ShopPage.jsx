import React, { Component } from "react";
import { SHOP_DATA } from "./ShopData";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
import "./ShopPage.scss";
class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page" style={{ color: "#eee" }}>
        <h1>SHOP</h1>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
