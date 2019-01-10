import React, { Component } from "react";
import { Container, Button, ListGroup, ListGroupItem } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";
class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }
  displayItems = () => {
    return this.props.item.items.map(({ _id, name }) => {
      return (
        <CSSTransition key={_id} timeout={500} classNames="fade">
          <ListGroupItem>
            {name}
            <Button
              className="remove-btn float-right"
              color="danger"
              size="sm"
              onClick={() => {
                this.props.deleteItem(_id);
              }}
            >
              &times;
            </Button>
          </ListGroupItem>
        </CSSTransition>
      );
    });
  };
  render() {
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {this.displayItems()}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  item: state.item
});

const mapDispatchToProps = {
  getItems,
  deleteItem
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingList);
