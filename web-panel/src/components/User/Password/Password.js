import React, { Component } from "react";
import { Button, Container } from "@material-ui/core";
import "./Password.css";
import LogOut from "../LogOut/LogOut";
class Password extends Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState = () => ({
    data: {
      fullName: "Govind Garg",
      password: "",
    },
    errors: {},
  });

  handleChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
      errors: {
        ...this.state.errors,
        [e.target.name]: "",
      },
    });
  };

  validate = () => {
    const { data } = this.state;
    let errors = {};
    if (data.password === "") errors.password = "Password must be valid.";
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { data } = this.state;

    const errors = this.validate();

    if (Object.keys(errors).length === 0) {
      alert(`Your New Password is ${data.password}`);
      localStorage.setItem('pass',JSON.stringify(data.password))

      this.setState(this.getInitialState());
    } else {
      this.setState({ errors });
    }
  };
  render() {
    const { data, errors } = this.state;
    return (
      <Container fixed>
        <div className="loginPage">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="password">UserName</label>
            <input
              id="password"
              value={data.fullName}
              onChange={this.handleChange}
            />

            <label htmlFor="password">Change Password</label>
            <input
              id="password"
              value={data.password}
              type="password"
              name="password"
              invalid={errors.password ? "true" : "false"}
              onChange={this.handleChange}
            />
            <span className="err">{errors.password}</span>

            <Button variant="contained" type="submit" color="primary">
              Change Password
            </Button>
            <LogOut />
          </form>
        </div>
      </Container>
    );
  }
}

export default Password;
