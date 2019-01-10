import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Users from "./components/Users";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import AuthorizedRoutes from "./routes/AuthorizedRoutes";
import UnauthorizedLayout from "./layout/UnauthorizedLayout";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path="/login" component={UnauthorizedLayout} />
              <AuthorizedRoutes path="/home" component={Home} />
              <AuthorizedRoutes path="/about" component={AboutUs} />
              <AuthorizedRoutes path="/contact" component={ContactUs} />
              <AuthorizedRoutes path="/users" component={Users} />
              <Redirect to="/login" />
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
