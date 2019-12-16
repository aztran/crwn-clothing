import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/sign-in-and-sign-up/SignInSignUp";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  unsSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data());

          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
          // console.log(this.state);
        });
      }
      // setCurrentUser(userAuth);
      // this.setState({ currentUser: userAuth });
      // this.setState({ currentUser: user });
      // createUserProfileDocument(user);
      // console.log(user);
    });
    // console.log(this.state.currentUser);
  }

  componentWillUnmount() {
    this.unsSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
