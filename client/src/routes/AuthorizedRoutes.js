import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import AppNavbar from "./../components/AppNavbar";
class AuthorizedRoutes extends Component {
  render() {
    return localStorage.getItem("username") !== null &&
      localStorage.getItem("password") !== null ? (
      <div>
        <AppNavbar />
        <Route
          path={this.props.path}
          component={this.props.component}
          {...this.props}
        />
      </div>
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default AuthorizedRoutes;
