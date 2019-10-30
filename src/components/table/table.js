import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Table, Container } from "react-bootstrap";
import classNames from "classnames";

import "../table/table.css";
import SignUp from "../sigan-up/sign-up";

import { updateStore } from "../../actions/index";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.childRef = React.createRef();
    // this.handleClose = this.handleClose.bind(this);
    this.editRow = this.editRow.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.state = {
      show: false,
      users: props.listUsers,
      userToEdit: {}
    };
  }

  saveUser = user => {
    var usersCopy = { ...this.state.users };
    let arrayIndex = this.state.users.length;
    if (user.index == null) {
      usersCopy[arrayIndex] = user;
    } else {
      usersCopy[user.index] = user;
    }
    var result = Object.keys(usersCopy).map(key => {
      return usersCopy[key];
    });
    this.setState({ users: result });
  };

  editRow(listValue, index) {
    listValue["index"] = index;
    this.setState({ userToEdit: listValue }, () => {
      //   this.childRef.current.editUser();
    });
  }

  componentWillReceiveProps() {
    console.log("componentWillReceiveProps-------->");
  }
  render() {
    const users = this.props.listUsers;
    if (!users || users.length == 0) {
      return (
        <Container>
          <SignUp
            ref={this.childRef}
            getUser={this.state.userToEdit}
            saveUser={this.saveUser}
          ></SignUp>
          <div className={classNames({ "text-warning": true, noData: true })}>
            <h3> No Users Available!!</h3>
          </div>
        </Container>
      );
    }
    return (
      <Container>
        <SignUp
          ref={this.childRef}
          getUser={this.state.userToEdit}
          saveUser={this.saveUser}
        ></SignUp>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {users.map((listValue, index) => {
              return (
                <tr
                  key={index}
                  onClick={event => this.editRow(listValue, index)}
                >
                  <td>{index + 1}</td>
                  <td>{listValue.firstName}</td>
                  <td>{listValue.lastName}</td>
                  <td>{listValue.email}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    listUsers: state.ListOfAllUsers
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ editUSer: updateStore }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid);
