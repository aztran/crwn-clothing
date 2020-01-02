import React from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import CollectionsOverviewContainer from "../../components/collections-overview/CollectionsOverviewContainer";
// import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import CollectionContainer from "../collection/Collection.container";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.action";

class ShopPage extends React.Component {
  unsubScribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
        {/* <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          )}
        /> */}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
