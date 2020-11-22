import React from "react";
import "./ShopPage.scss";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import Collection from "../Collection/Collection";

const ShopPage = ({ match }) => {
  console.log(match);
  return (
    <div className="shop-page" style={{ color: "#eee" }}>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default ShopPage;
