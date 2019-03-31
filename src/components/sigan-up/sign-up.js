import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class SignUp extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.getUserdetails = this.getUserdetails.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            show: false,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            index: null
        };
    }

    handleClose() {
        this.setState({ show: false });
        this.setState({ firstName: '' });
        this.setState({ lastName: '' });
        this.setState({ email: '' });
        this.setState({ password: '' });
        this.setState({ index: null });

    }

    handleShow() {
        this.setState({ show: true });
    }

    getUserdetails() {
        this.setState({ show: false });
        this.props.saveUser(this.state);
        this.handleClose();

    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    editUser() {
        let { getUser } = this.props;
        if (!(Object.keys(getUser).length === 0 && getUser.constructor === Object)) {
            this.setState({ show: true });
            this.setState(getUser);
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
                                <Form.Control value={this.state.firstName} type="text" name="firstName" onChange={this.handleChange} placeholder="Enter first name" />
                            </Form.Group>
                            <Form.Group controlId="formLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control value={this.state.lastName} type="text" name="lastName" onChange={this.handleChange} placeholder="Enter last name" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control value={this.state.email} type="email" name="email" onChange={this.handleChange} placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                               </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control value={this.state.password} type="password" name="password" onChange={this.handleChange} placeholder="Password" />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" type="button" onClick={this.handleClose}>
                                Close
                        </Button>
                            <Button variant="primary" type="button" onClick={this.getUserdetails}>
                                Sign Up
                        </Button>
                        </Modal.Footer>
                    </Form>;
                </Modal>
            </>
        );
    }
}

//   render(<SignUp />);
export default SignUp;