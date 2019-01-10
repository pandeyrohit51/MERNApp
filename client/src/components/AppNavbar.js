import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import { withRouter } from "react-router-dom";
import { logOut } from "../actions/userActions";
import { connect } from "react-redux";
class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.navigate = this.navigate.bind(this);
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  navigate = e => {
    if (e.target.dataset.name === "login") {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }
    this.props.history.push(e.target.dataset.to);
    this.props.logOut();
  };
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Shopping List</NavbarBrand>
            <NavbarToggler onClick={() => this.toggle()} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar onClick={e => this.navigate(e)}>
                <NavItem>
                  <NavLink data-name="users" data-to="/users" href="#">
                    Users
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink data-name="home" data-to="/home" href="#">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink data-name="about" data-to="/about" href="#">
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink data-name="contact" data-to="/contact" href="#">
                    Contact Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink data-name="login" data-to="/login" href="#">
                    Log Out
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
});
const mapDispatchToProps = {
  logOut
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppNavbar)
);
