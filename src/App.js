import "./App.scss";
import { connect } from "react-redux";
import React, { Component } from "react";
import { HomePage } from "./pages/HomePage/HomePage";
import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
import Checkout from "./pages/Checkout/Checkout";
import Header from "./components/Header/Header";
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp";

import { auth, createUserProfileDocument } from "./firebase/firebase.utility";
import { setCurrentUser } from "./redux/user/user-actions";
import { selectCurrentUser } from "./redux/user/user-selector";
import { createStructuredSelector } from "reselect";
function HatsPage(props) {
  console.log(props);
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
}

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />{" "}
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={Checkout} />
            <Route path="/shop/hats" component={HatsPage} />
            <Route
              exact
              path="/signinandsignup"
              render={() =>
                this.props.currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SignInAndSignUp />
                )
              }
            />
          </Switch>{" "}
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
