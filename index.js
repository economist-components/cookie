import React from 'react';

export default class AuthenticatedComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = this._getLoginState();
  }

  _getLoginState() {
    return {
      isLoggedIn: this._getCookie('mm-logged-in-state'),
      username: this._getCookie('mm-logged-in-state')
    }
  }

  _getCookie(name) {
    if (typeof document !== 'undefined') {
      var re = new RegExp(name + "=([^;]+)");
      var value = re.exec(document.cookie);
      return (value != null) ? unescape(value[1]) : null;
    }
  }

  render() {
    var newChildren = [];
    var me = this;
    React.Children.forEach(this.props.children, function(child) {
      if((me.state.isLoggedIn !== null && child.props.showIfLoggedIn==="true") || (me.state.isLoggedIn === null && child.props.showIfNotLoggedIn==="true")){
        child.props.username = me.state.username;
        newChildren.push(child);
      }
    });
    return (
      <div>
        {newChildren}
      </div>
    );
  }
}