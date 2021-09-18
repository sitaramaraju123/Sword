import React, { Component } from "react";
import Registration from "./components/Registration";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header/Header";
import UserList from "./components/UserList";
import ErrorBoundary from "./components/errorBoundary";
class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <ErrorBoundary>
            <Header />
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/Registration" component={Registration} />
              <Route path="/UserList" component={UserList} />
            </Switch>
          </ErrorBoundary>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
