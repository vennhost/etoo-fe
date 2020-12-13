import Navbar from "../../components/Navbar";
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import axios from "axios";
/**
 * @author
 * @function SignUp
 **/

export default class Login extends Component {
  state = {
    username: "",
    password: "",
  };
  /**handleSubmit = e => {
            e.preventDefault();
            const data = {
                first_name: this.firstName,
                last_name: this.lastName,
                email: this.email,
                tel: this.email,
                password: this.password,
                password_confirm: this.confirmPassword,
            };
        axios.post('http://localhost:8000/register', data).then(
            res => {
                console.log(res)
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
        };**/

  render() {
    this.handleSubmit = async (e) => {
      e.preventDefault();
      const resp = await fetch(
        "https://diamondetoo.herokuapp.com/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password,
          }),
        }
      );
      const result = await resp.json();
      console.log(result);
      if (result) {
        this.setState({
          success: true,
        });
        this.props.history.push("/Dashboard");
      }
    };
    return (
      <div className="auth-wrapper">
        <Navbar />
        <div className="auth-inner">
          <form onSubmit={this.handleSubmit}>
            <h3> Login </h3>

            <div className="form-group">
              <input
                name="username"
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
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
                required
                autoFocus
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>
            <div className="form-group">
              <Form.Check
                type="checkbox"
                id="autoSizingCheck2"
                label="Remember me"
              />
            </div>

            <button className="btn btn-dark btn-block" autoFocus>
              Login
            </button>
          </form>

          <Link to="/ForgetPassword">Forgot Password</Link>
        </div>
      </div>
    );
  }
}
