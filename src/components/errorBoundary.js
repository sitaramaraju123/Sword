import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hadError: false
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hadError: true
    };
  }

  render() {
    if (this.state.hadError) {
      return (
        <div>
          <h1 style={{ fontSize: 150 }}>404</h1>
          <center>
            <small>Wrong Url..</small>
          </center>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
