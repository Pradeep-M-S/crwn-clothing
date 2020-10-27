import "./App.scss";
import { HomePage } from "./pages/HomePage/HomePage";
import { Route, Switch } from "react-router-dom";

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
      <Switch>
        <Route exact path="/" component={HomePage} />{" "}
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
