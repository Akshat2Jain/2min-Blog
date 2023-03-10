import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/NewBlog/Form";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog/:id" component={Blog} />
        <Route path="/AddBlog" component={Form}/>
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
