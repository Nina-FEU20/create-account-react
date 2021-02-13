import React, { useState } from "react";
import "./App.css";
import Registration from "./components/Registration";
import Account from "./components/Account";

//style
import styled from "styled-components";
// Global Style
import GlobalStyle from "./components/GlobalStyles";

// router
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <TopContainer>
        <h1>Välkommen</h1>
      </TopContainer>
      <Switch>
        <Route path="/" component={Registration} exact />
        <Route path="/account" component={Account} />
      </Switch>
    </Container>
  );
}

const Container = styled.div`
  width: 375px;
  height: 798px;
  border-radius: 6px;
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.15);
  background: blue;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 12%;
  background: #ededed;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px 6px 0px 0px;

  h1 {
    font-size: 26px;
    font-family: "Titillium Web", sans-serif;
  }
`;
export default App;
