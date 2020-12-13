import Navbar from "../../components/Navbar";
import React, { Component } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";
/**
 * @author
 * @function SignUp
 **/

export default class SignUp extends Component {
  state = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: null,
    success: false,
    failed: false,
  };

  render() {
    this.handleSubmit = async (e) => {
      e.preventDefault();
      const resp = await fetch(
        "https://diamondetoo.herokuapp.com/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone,
          }),
        }
      );
      const result = await resp.json();
      console.log(result);
      if (result) {
        this.setState({
          success: true,
        });
      }
    };
    return (
      <div className="auth-wrapper">
        <Navbar />
        <div className="auth-inner">
          <form onSubmit={this.handleSubmit}>
            <h3> Register </h3>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                required
                autoFocus
                onChange={(e) => this.setState({ firstName: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                required
                autoFocus
                onChange={(e) => this.setState({ lastName: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
                autoFocus
                onChange={(e) => this.setState({ username: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                className="form-control"
                placeholder="Phone Number"
                required
                autoFocus
                onChange={(e) => this.setState({ phone: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
                autoFocus
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                required
                autoFocus
                onChange={(e) => this.setState({ c_password: e.target.value })}
              />
            </div>

            <button className="btn btn-dark btn-block" autoFocus>
              Register
            </button>
          </form>
          {this.state.success ? (
            <Alert variant="success">Registration Successful, Login now</Alert>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}
