import React, { Component } from "react";
import {
  Container,
  Card,
  Collapse,
  CardBody,
  Button,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getUsers } from "../actions/userActions";
import AddUserModal from "./AddUserModal";
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      modal: false
    };
  }
  componentDidMount() {
    this.props.getUsers();
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.user.users.length !== prevState.users.length) {
      nextProps.user.users.map(user => {
        user.isOpen = false;
      });
      return {
        users: nextProps.user.users
      };
    } else {
      return null;
    }
  }
  toggle = index => {
    let users = this.state.users;
    users[index].isOpen = !users[index].isOpen;
    this.setState({ users: users });
  };
  renderUsers = () => {
    if (this.props.user.loading) {
      return <div>Loading...</div>;
    } else if (this.props.user.users.length === 0) {
      return null;
    } else {
      return this.state.users.map((user, index) => {
        return (
          <div key={user._id} className="m-3">
            <div className="bg-info clearfix rounded-top p-2">
              <h3 className="float-left">{`${user.firstName} ${
                user.lastName
              }`}</h3>
              <Button
                onClick={() => this.toggle(index)}
                className="btn float-right rounded bg-info border-0"
                size="md"
              >
                {this.state.users[index].isOpen ? "-" : "+"}
              </Button>
            </div>
            <Collapse isOpen={this.state.users[index].isOpen}>
              <Card>
                <CardBody>
                  <ListGroup>
                    <ListGroupItem>
                      {`Username :`} <b>{user.username}</b>
                    </ListGroupItem>
                    <ListGroupItem>
                      {`Password :`} <b>{user.password}</b>
                    </ListGroupItem>
                    <ListGroupItem>
                      {`First Name :`} <b>{user.firstName}</b>
                    </ListGroupItem>
                    <ListGroupItem>
                      {`Last Name :`} <b>{user.lastName}</b>
                    </ListGroupItem>
                    <ListGroupItem>
                      {`Age :`} <b>{user.age}</b>
                    </ListGroupItem>
                  </ListGroup>
                </CardBody>
              </Card>
            </Collapse>
          </div>
        );
      });
    }
  };
  render() {
    return (
      <Container>
        <h1>Users :</h1>
        {this.renderUsers()}
        <Button
          size="lg"
          color="success"
          className="rounded-circle btn-add-user"
          onClick={() => this.setState({ modal: !this.state.modal })}
        >
          +
        </Button>
        {this.state.modal ? <AddUserModal /> : null}
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
});
const mapDispatchToProps = {
  getUsers
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Users)
);
