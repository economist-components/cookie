import AuthenticatedComponent from './index';
import React from 'react';
import MastHead from './index';

var ProfileUsername = React.createClass({
  render: function() {
    return (
      <span className="username">
        {this.props.username}
      </span>
    );
  }
});

export default (
  <AuthenticatedComponent>
    <ProfileUsername showIfLoggedIn="true"></ProfileUsername>
    <h1 showIfNotLoggedIn="true">Not logged in</h1>
  </AuthenticatedComponent>
);