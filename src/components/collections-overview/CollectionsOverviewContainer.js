import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionIsFetch } from "../../redux/shop/shop.selector";
import CollectionsOverview from "./CollectionsOverview";
import WithSpinner from "../with-spinner/WithSpinner";

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionIsFetch
});

const CollectionsOverViewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverViewContainer;
