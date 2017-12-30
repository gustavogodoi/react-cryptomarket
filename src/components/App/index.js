import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { Wrapper, BodyWrapper } from "./style";
import Header from "../Header";
import Footer from "../Footer";
import ListPage from "../../container/ListPage";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <BodyWrapper>
          <Switch>
            <Route exact path="/:view?" component={ListPage} />
          </Switch>
        </BodyWrapper>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
