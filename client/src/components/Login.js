import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
  Alert,
  InputGroupAddon,
  InputGroup
} from "reactstrap";
import { validateUser } from "../actions/userActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      success: false,
      error: false
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newItem = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.validateUser(newItem);
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.user.error) {
      return {
        error: true
      };
    } else if (nextProps.user.success !== prevState.success) {
      return {
        success: nextProps.user.success,
        error: false
      };
    } else {
      return null;
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.success !== prevState.success) {
      localStorage.setItem("username", this.state.username);
      localStorage.setItem("password", this.state.password);
      this.props.history.push("/home");
    }
  }
  render() {
    return (
      <Container className="mt-5">
        <Alert color="danger" isOpen={this.state.error}>
          Wrong username/password
        </Alert>
        <Row>
          <Col xs="0" md="3" sm="3" lg="3" />
          <Col xs="12" md="6" sm="6" lg="6" className="mt-5 px-5">
            <Form
              onSubmit={this.onSubmit}
              className="border shadow-lg p-3 mb-5 bg-white rounded"
            >
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    Username
                  </InputGroupAddon>
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    onChange={this.onChange}
                    autoFocus
                    className="outline-0"
                  />
                </InputGroup>
                <InputGroup className="mt-4">
                  <InputGroupAddon addonType="prepend">
                    Password
                  </InputGroupAddon>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={this.onChange}
                  />
                </InputGroup>
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Log In
                </Button>
              </FormGroup>
            </Form>
          </Col>
          <Col xs="0" md="3" sm="3" lg="3" />
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
});
const mapDispatchToProps = {
  validateUser
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
