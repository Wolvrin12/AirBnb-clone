import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "../containers/SearchPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../containers/Home";
import React from "react";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
