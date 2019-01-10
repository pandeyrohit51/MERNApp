import React, { Component } from "react";
import { Container } from "reactstrap";
import { withRouter } from "react-router-dom";
class ContactUs extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>ContactUs Page</h1>
        </Container>
      </div>
    );
  }
}
export default withRouter(ContactUs);
