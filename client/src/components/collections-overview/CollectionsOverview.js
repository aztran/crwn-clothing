import React from "react";
import "./CollectionsOverview.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...collection }) => (
        <CollectionPreview key={id} {...collection} />
      ))}
    </div>
  );
};

const mapstateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapstateToProps)(CollectionsOverview);
