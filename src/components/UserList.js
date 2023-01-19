import React, { Component } from "react";
import "./UserList.css";
class UserList extends Component {
  state = {
    data: [],
    data1: [],
    error: ""
  };
  componentDidMount() {
    fetch("http://localhost:3001/UserData")
      .then(e => e.json())
      .then(item => this.setState({ data: item, data1: item }))
      .catch(e => this.setState({ error: e }));
  }
  handleClick = click => {
    console.log(click);
    for (let i = 0; i < this.state.data1.length; i++) {
      if (click == this.state.data1[i].id) {
        let data = this.state.data1.filter(item => item.id == click);
        this.setState({ data });
        break;
      } else if (click == this.state.data1[i].name) {
        let data = this.state.data1.filter(item => item.name == click);

        this.setState({ data });
        break;
      } else if (click == this.state.data1[i].username) {
        let data = this.state.data1.filter(item => item.username == click);
        this.setState({ data });
        break;
      } else if (click == this.state.data1[i].email) {
        let data = this.state.data1.filter(item => item.email == click);
        this.setState({ data });
        break;
      } else if (click == this.state.data1[i].password) {
        let data = this.state.data1.filter(item => item.password == click);
        this.setState({ data });
        break;
      }
    }
  };

  Reset = () => {
    this.setState({ data: this.state.data1 });
  };

  render() {
    const { data, data1, error } = this.state;
    console.log(data);
    return (
      <div className="container">
        <h1>UserList</h1>
        <hr />
        {data.length === 0 ? (
          <div className="data">Run Server to fetch Api.....{error}</div>
        ) : (
          <>
            <button className="btn" onClick={this.Reset}>
              Reset
            </button>
            <div className="header">
              <div>
                <b>
                  <select
                    onChange={e => this.handleClick(e.target.value)}
                    className="op"
                  >
                    <option>id</option>
                    {data1.map(item => (
                      <option key={item.id}>{item.id}</option>
                    ))}
                  </select>
                </b>
              </div>
              <div>
                <b>
                  <select
                    onChange={e => this.handleClick(e.target.value)}
                    className="op"
                  >
                    <option>Name</option>
                    {data1.map(item => (
                      <option key={item.id}>{item.name}</option>
                    ))}
                  </select>
                </b>
              </div>
              <div>
                <b>
                  <select
                    onChange={e => this.handleClick(e.target.value)}
                    className="op"
                  >
                    <option>Username</option>
                    {data1.map(item => (
                      <option key={item.id}>{item.username}</option>
                    ))}
                  </select>
                </b>
              </div>
              <div>
                <b>
                  <select
                    onChange={e => this.handleClick(e.target.value)}
                    className="op"
                  >
                    <option>Email</option>
                    {data1.map(item => (
                      <option key={item.id}>{item.email}</option>
                    ))}
                  </select>
                </b>
              </div>
              <div>
                <b>
                  <select
                    onChange={e => this.handleClick(e.target.value)}
                    className="op"
                  >
                    <option>Password</option>
                    {data1.map(item => (
                      <option key={item.id}>{item.password}</option>
                    ))}
                  </select>
                </b>
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
