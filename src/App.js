import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import history from './hisroty';
import NavBar from "./components/NavBar";
import Shop from "./components/Shop";
import ProductForm from "./components/ProductForm";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div className="App">
            <NavBar />
            <Route exact path="/" component={Shop} />
            <Route exact path="/add-product" component={ProductForm} />
            <Route exact path="/edit-product" render={props => <ProductForm {...props} />} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
