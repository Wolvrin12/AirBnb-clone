import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "../components/SearchPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";
import "../styles/App.css";

function App() {
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
}

export default App;
