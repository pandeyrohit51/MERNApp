import React, { Component } from "react";
import { Container } from "reactstrap";
import ShoppingList from "./ShoppingList";
import ItemModal from "./ItemModal";
import Carousels from "./Carousels";
class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <Carousels />
          <ItemModal />
          <ShoppingList />
        </Container>
      </div>
    );
  }
}
export default Home;
