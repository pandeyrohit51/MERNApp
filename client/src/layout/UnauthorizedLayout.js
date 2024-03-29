import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Pages
import Login from "../components/Login";

const UnauthorizedLayout = () => (
  <div className="unauthorized-layout">
    {/*
    
    Imagine this could be a general layout for all unauthorized pages like
    the login page, forgot password, email-verified, etc...
    
    For this example project, we'll just have a Login Page
    
    */}
    <Switch>
      <Route path="/login" component={Login} />
      <Redirect to="/login" />
    </Switch>
  </div>
);

export default UnauthorizedLayout;
