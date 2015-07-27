import AuthenticatedComponent from './index.es6';
import React from 'react';
export default (
  <AuthenticatedComponent>
    <h1 showIfNotLoggedIn="true">Not logged in</h1>
    <h2 showIfLoggedIn="true">Logged in</h2>
  </AuthenticatedComponent>
);
