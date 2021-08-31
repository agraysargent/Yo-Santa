import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Packages from "./pages/Packages";
import Checkout from "./pages/Checkout";
import Nav from "./components/Nav";
import Winter from "./pages/Winter";
import Fall from "./pages/Fall";
import Summer from "./pages/Summer";
import Spring from "./pages/Spring";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav />
        </div>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/packages">
          <Packages />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/fall">
          <Fall />
        </Route>
        <Route exact path="/spring">
          <Spring />
        </Route>
        <Route exact path="/summer">
          <Summer />
        </Route>
        <Route exact path="/winter">
          <Winter />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
      </Router>
    </ApolloProvider>
  );
}

export default App;
