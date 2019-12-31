import React from "react";
import { Route } from "react-router-dom";

import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import Collection from "../collection/Collection";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.action";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import WithSpinner from "../../components/with-spinner/WithSpinner";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(Collection);
class ShopPage extends React.Component {
  state = {
    loading: true
  };
  unsubScribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    /**
     * Use Observable
     */

    // collectionRef.onSnapshot(async snapshot => {
    //   console.log(snapshot);
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   // console.log(collectionsMap);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });

    /**
     * Use Promise
     */

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      // console.log(collectionsMap);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });

    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/crwn-db-aaa01/databases/(default)/documents/collections"
    // )
    //   .then(response => response.json())
    //   .then(collections => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(collections);
    //     console.log(collectionsMap);
    //   });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
