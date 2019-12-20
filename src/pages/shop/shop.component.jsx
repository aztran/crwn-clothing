import React from "react";
import { Route } from "react-router-dom";

import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import Collection from "../collection/Collection";

const Shop = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default Shop;
