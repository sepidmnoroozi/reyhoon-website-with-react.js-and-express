import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Restaurant from "./components/layout/Restaurant";
import Restaurantlist from "./components/layout/Restaurantslist";
import Searchbar from "./components/layout/Searchbar";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Searchbar} />
          <Route exact path="/restaurant" component={Restaurant} />
          <Route exact path="/restaurantslist" component={Restaurantlist} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
