import Cookie from './index.es6';
import React from 'react';
const cookie = new Cookie();
const loggedin = (cookie.getCookie('mm-logged-in-state')) ? 'logged_in' : 'not_logged_in';
export default (
  <p>Your state is {loggedin}</p>
);
