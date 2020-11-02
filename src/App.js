import "./App.scss";
import React, { Component } from "react";
import { HomePage } from "./pages/HomePage/HomePage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp";
import { auth, createUserProfileDocument } from "./firebase/firebase.utility";
function HatsPage(props) {
  console.log(props);
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth != null) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
          console.log(this.state);
        });
      } else {
        this.setState({ currentUser: null });
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
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage} />{" "}
            <Route exact path="/shop" component={ShopPage} />
            <Route path="/shop/hats" component={HatsPage} />
            <Route path="/signinandsignup" component={SignInAndSignUp} />
          </Switch>{" "}
        </div>
      </div>
    );
  }
}

export default App;
