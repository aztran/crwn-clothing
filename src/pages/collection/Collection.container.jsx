import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../../components/with-spinner/WithSpinner";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selector";
import Collection from "./Collection";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);

export default CollectionPageContainer;
