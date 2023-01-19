import React, { Component } from "react";

class UserProfile extends Component {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.name}</h1>
      </div>
    );
  }
}

export default UserProfile;
