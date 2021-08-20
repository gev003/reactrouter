import About from "./about";
import "./App.css";
import Nav from "./nav";
import Shop from "./shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetail from "./itemDetail";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
