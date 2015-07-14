import AuthenticatedComponent from './index.es6';
import React from 'react';
export default (
  <AuthenticatedComponent>
    <h1 showIfNotLoggedIn="true">Not logged in</h1>
  </AuthenticatedComponent>
);
