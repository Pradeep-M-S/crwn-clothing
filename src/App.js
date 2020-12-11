import "./App.scss";
import { connect } from "react-redux";
import React, { Component } from "react";
import { HomePage } from "./pages/HomePage/HomePage";
import { Route, Switch, Redirect } from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
import Checkout from "./pages/Checkout/Checkout";
import Header from "./components/Header/Header";
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp";

import { selectCurrentUser } from "./redux/user/user-selector";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/user/user-actions"
class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
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
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={Checkout} />
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

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
