import About from "./about";
import "./App.css";
import Nav from "./nav";
import Shop from "./shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetail from "./itemDetail";
import AboutDec from "./aboutDecendennt";


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
          <Route path="/about" exact component={About} />
          <Route path="/about/:id" component={AboutDec} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
          {/* <Route path="/" render={() => <div>404</div>} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
