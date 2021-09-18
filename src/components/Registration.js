import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header/Header.css";
class Registration extends Component {
  state = {
    name: "",
    username: "",
    email: "",
    password: "",
    conformPassword: "",
    isLogin: false
  };
  onChange(field, value) {
    this.setState({ [field]: value });
  }
  onSubmit = e => {
    e.preventDefault();

    const obj = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    const Option = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj)
    };
    if (this.state.password === this.state.conformPassword) {
      fetch("http://localhost:3001/UserData", Option);
      this.setState({
        isLogin: true
      });
      alert("Registred successfull");
    } else {
      alert("Please Check your entred Password");
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <div className="container">
            <h1>Register</h1>
            <hr />
            <label htmlFor="Name">Name:</label>
            <input
              type="text"
              placeholder="Name"
              onChange={e => this.onChange("name", e.target.value)}
              required
            />
            <br />
            <label htmlFor="Usename">Usename:</label>
            <input
              type="text"
              placeholder="UserName"
              onChange={e => this.onChange("username", e.target.value)}
              required
            />
            <br />
            <label htmlFor="Email">Email:</label>
            <input
              type="email"
              placeholder="Email"
              onChange={e => this.onChange("email", e.target.value)}
              required
            />
            <br />
            <label htmlFor="Password">Password:</label>
            <input
              type="password"
              placeholder="Password"
              onChange={e => this.onChange("password", e.target.value)}
              required
            />
            <br />
            <label htmlFor="ConformPassword">Conform Password:</label>
            <input
              type="password"
              placeholder="Conform Password"
              onChange={e => this.onChange("conformPassword", e.target.value)}
              required
            />
            <br />
            <button type="submit">Signup</button>
            <p>
              if you got Registration success click here
              <Link to="/">Login</Link>
            </p>
          </div>
        </form>
      </>
    );
  }
}

export default Registration;
