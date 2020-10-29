import "./App.scss";
import { HomePage } from "./pages/HomePage/HomePage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";

function HatsPage(props) {
  console.log(props);
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />{" "}
        <Route exact path="/shop" component={ShopPage} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
