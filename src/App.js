import About from "./about";
import "./App.scss";
import Nav from "./nav";
import Shop from "./shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetail from "./itemDetail";
import Error from "./Error";
import React, { useReducer } from "react";
import Context from "./context";

const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    return [...action.payload];
  }
};

const defaultState = [];

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const updateValue = (newState) => {
    dispatch({ type: "ADD_ITEM", payload: newState });
  };

  return (
    <Context.Provider value={{ updateValue, state }}>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/shop/:id" component={ItemDetail} />
            <Route path="*" component={Error} />
          </Switch>
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};
