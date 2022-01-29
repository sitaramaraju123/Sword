import React, { Component } from "react";
import Registration from "./components/Registration";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header/Header";
import UserList from "./components/UserList";
import ErrorBoundary from "./components/errorBoundary";
// import Home from "./components/Home";
import UserProfile from "./components/userProfile";
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
              <Route path="/Userprofile" component={UserProfile} />
            </Switch>
          </ErrorBoundary>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
