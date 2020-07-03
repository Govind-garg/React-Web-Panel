import React, { Component } from "react";
import { Button, Container } from "@material-ui/core";
import "./Login.css";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
    this.isDisabled = this.isDisabled.bind(this);
  }

  getInitialState = () => ({
    data: {
      firstName: "",
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

    if (data.firstName === "")
      errors.firstName = "First Name can not be blank.";
    if (data.password === "") errors.password = "Password must be valid.";
    return errors;
  };

  isDisabled = () => {
    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { data } = this.state;

    const errors = this.validate();

    if (Object.keys(errors).length === 0) {
      if (data.firstName == "root" && data.password == "root") {
        localStorage.setItem("login", JSON.stringify(data));
        alert("SuccessFully Logged In");
        this.props.history.push("/");
      } else {
        alert("User name password incorrect.");
      }

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
            <label htmlFor="firstName">User Name</label>
            <input
              id="firstName"
              value={data.firstName}
              invalid={errors.firstName ? "true" : "false"}
              name="firstName"
              autoComplete="off"
              onChange={this.handleChange}
            />
            <span className="err">{errors.firstName}</span>

            <label htmlFor="password">Password</label>
            <input
              id="password"
              value={data.password}
              type="password"
              name="password"
              invalid={errors.password ? "true" : "false"}
              onChange={this.handleChange}
            />
            <span className="err">{errors.password}</span>

            {localStorage.getItem("login") ? (
              <Button
                disabled={this.isDisabled()}
                variant="contained"
                type="submit"
                color="primary"
              >
                Already In
              </Button>
            ) : (
              <Button variant="contained" type="submit" color="primary">
                LogIn
              </Button>
            )}
          </form>
        </div>
      </Container>
    );
  }
}

export default Login;
