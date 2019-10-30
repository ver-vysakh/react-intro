import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { saveToStore } from "../../actions/index";
import { updateStore } from "../../actions/index";

class SignUp extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.getUserdetails = this.getUserdetails.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      storedUsers: props.storedUsers,
      show: false,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      index: null
    };
  }

  handleClose() {
    this.setState({ show: false });
    this.setState({ firstName: "" });
    this.setState({ lastName: "" });
    this.setState({ email: "" });
    this.setState({ password: "" });
    this.setState({ index: null });
  }

  handleShow() {
    this.setState({ show: true });
  }

  getUserdetails() {
    let user = { ...this.state };
    this.setState({ show: false });
    this.handleClose();
    if (user.index != null) {
      this.props.updateStore(user);
    } else {
      this.props.saveToStore(user);
    }
    // user.index != null ? this.props.updateStore(user) : this.props.saveToStore(user);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  editUser() {
    let { getUser } = this.props;
    if (
      !(Object.keys(getUser).length === 0 && getUser.constructor === Object)
    ) {
      this.setState({ show: true });
      this.setState(getUser);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.getUser !== this.props.getUser) {
      this.editUser();
    }
  }

  render() {
    return (
      <>
        <div className="Header">
          <Button type="button" variant="primary" onClick={this.handleShow}>
            Sign Up!
          </Button>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Form>
            <Modal.Body>
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  value={this.state.firstName}
                  type="text"
                  name="firstName"
                  onChange={this.handleChange}
                  placeholder="Enter first name"
                />
              </Form.Group>
              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  value={this.state.lastName}
                  type="text"
                  name="lastName"
                  onChange={this.handleChange}
                  placeholder="Enter last name"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  value={this.state.email}
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={this.state.password}
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  placeholder="Password"
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                type="button"
                onClick={this.handleClose}
              >
                Close
              </Button>

              <Button
                variant="primary"
                type="button"
                onClick={this.getUserdetails}
              >
                {/* Save the user without using the redux store
                            <Button variant="primary" type="button" onClick={this.getUserdetails}>
                                Sign Up
                        </Button> */}
                {/* Save the user by using the redux store concept */}
                Sign Up
              </Button>
            </Modal.Footer>
          </Form>
          ;
        </Modal>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { storedUsers: state.ListOfAllUsers };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//     updateStore: data => dispatch(updateStore(data)),
//     saveToStore: data => dispatch(saveToStore(data))
//   });
// }

export default connect(
  mapStateToProps,
  dispatch => ({
    updateStore: data => dispatch(updateStore(data)),
    saveToStore: data => dispatch(saveToStore(data))
  })
)(SignUp);
