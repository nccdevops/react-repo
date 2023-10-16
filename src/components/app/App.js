import { browserHistory } from 'react-router';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from '../homepage/index.component';
import LoginPage from '../login/LoginPage.component';
import SignupPage from '../signup/SignupPage.component';
import Document from '../documents/DocumentPage.component';
import Create from '../documents/DocumentCreatePage.component';
import ProfilePage from '../ProfilePage/ProfilePage.component';
import UsersPage from '../users/UsersPage.component';
import AllDocumentsPage from '../documents/AllDocumentsPage.component';
import Body from '../body/BodyPage.component';

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   * renders the app component
   * @returns {void}
   * @memberOf App
   */
  render() {
    return (
      <BrowserRouter history={browserHistory}>
        <div>
          <Route path="/app/" component={Index} />
          <Route path="/app/login" component={LoginPage} />
          <Route path="/app/signup" component={SignupPage} />
          <Route path="/app/document" component={Document} />
          <Route path="/app/create" component={Create} />
          <Route path="/app/profile" component={ProfilePage} />
          <Route path="/app/users" component={UsersPage} />
          <Route path="/app/all/document" component={AllDocumentsPage} />
          {/*<Route path="/app/body" component={Body} />*/}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
