import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Header from "../Header";
import Footer from "../Footer";
import ListPage from "../../container/ListPage";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={ListPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
