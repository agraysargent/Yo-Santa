import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Packages from "./pages/Packages";
import Nav from "./components/nav";

function App() {
  const [page, setPage] = useState("Home");

  const linkHandler = (link) => {
    console.log(link);
    window.open(link);
  };

  const renderPage = (currentPage) => {
    if (currentPage === "Home") {
      return <Home />;
    } else if (currentPage === "SignUp") {
      return <SignUp />;
    } else if (currentPage === "Packages") {
      return <Packages linkHandler={linkHandler} />;
    }
  };

  const handlePageChange = (newPage) => setPage(newPage);

  return (
    <div>
      <div>
        <Nav page={page} setPage={handlePageChange} linkHandler={linkHandler} />
        {renderPage(page)}
      </div>
    </div>
  );
}

export default App;
