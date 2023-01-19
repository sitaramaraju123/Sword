import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header/Header.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
    Name: "",
    data: [],
    isLogin: false
  };
  componentDidMount() {
    fetch("http://localhost:3001/UserData")
      .then(e => e.json())
      .then(item => this.setState({ data: item }));
  }

  onChange(field, value) {
    this.setState({ [field]: value });
  }

  onSubmit = e => {
    e.preventDefault();
    let arr = this.state.data.filter(
      item =>
        item.username === this.state.username &&
        item.password === this.state.password
    );
    this.setState({ Name: arr[0].name });
    if (arr.length !== 0) {
      this.props.history.push({
        pathname: "/Userprofile",
        search: "?query=abc",
        username: arr[0].name
      });
    } else {
      alert("Invalid details");
    }
  };
  render() {
    return (
      <>
        {this.state.isLogin ? <UserProfile name={this.state.Name} /> : null}
        <form onSubmit={this.onSubmit}>
          <div className="container">
            <h1>Login</h1>
            <hr />
            <label htmlFor="Usename">Usename:</label>
            <input
              type="text"
              placeholder="UserName"
              onChange={e => this.onChange("username", e.target.value)}
              required
            />
            <label htmlFor="Password">Password:</label>
            <input
              type="password"
              placeholder="Password"
              onChange={e => this.onChange("password", e.target.value)}
              required
            />
            <button type="submit">Login</button>
            <p>
              If your new User please Register Here{" "}
              <Link to="/Registration">SignUp</Link>
            </p>
          </div>
        </form>
      </>
    );
  }
}

export default Login;
