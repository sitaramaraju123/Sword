import React, { Component } from "react";

class UserList extends Component {
  state = {
    data: [],
    error: ""
  };
  componentDidMount() {
    fetch("http://localhost:3001/UserData")
      .then(e => e.json())
      .then(item => this.setState({ data: item }))
      .catch(e => this.setState({ error: e }));
  }
  render() {
    const { data, error } = this.state;
    return (
      <div className="container">
        <h1>UserList</h1>
        <hr />
        {data.length === 0 ? (
          <div className="data">Run Server to fetch Api.....{error}</div>
        ) : (
          <>
            <div className="header">
              <div>
                <b>Id</b>
              </div>
              <div>
                <b>Name</b>
              </div>
              <div>
                <b>Username</b>
              </div>
              <div>
                <b>Email</b>
              </div>
              <div>
                <b>password</b>
              </div>
            </div>
            <div>
              {data.map(item => (
                <div key={item.id} className="list">
                  <div>{item.id}</div>
                  <div>{item.name}</div>
                  <div>{item.username}</div>
                  <div>{item.email}</div>
                  <div>{item.password}</div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default UserList;
