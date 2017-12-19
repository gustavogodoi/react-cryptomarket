import React, { Component } from "react";
import { Switch, Route } from "react-router";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import ListPage from "../../container/ListPage";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;

const BodyWrapper = styled.div`
  flex: 1 0 auto;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <BodyWrapper>
          <Switch>
            <Route exact path="/" component={ListPage} />
          </Switch>
        </BodyWrapper>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
