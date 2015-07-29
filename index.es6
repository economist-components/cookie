export default class Authenticated {
  getLoginState(cookieName) {
    if (!cookieName) {
      return this.getCookie(cookieName);
    }
  }

  getCookie(cookieName) {
    if (typeof document !== 'undefined') {
      const re = new RegExp(cookieName + '=([^;]+)');
      const value = re.exec(document.cookie);
      return (value !== null) ? unescape(value[1]) : null;
    }
  }
}

// import React from 'react';

// export default class AuthenticatedComponent extends React.Component {

//   static get propTypes() {
//     return {
//       isLoggedIn: React.PropTypes.string,
//       showIfLoggedIn: React.PropTypes.bool,
//       children: React.PropTypes.array,
//     };
//   }

//   constructor(props) {
//     super(props);
//     this.state = this.getLoginState();
//   }

//   getLoginState() {
//     return {
//       isLoggedIn: this.getCookie('mm-logged-in-state'),
//     };
//   }

//   getCookie(name) {
//     if (typeof document !== 'undefined') {
//       const re = new RegExp(name + '=([^;]+)');
//       const value = re.exec(document.cookie);
//       return (value !== null) ? unescape(value[1]) : null;
//     }
//   }

//   render() {
//     const newChildren = [];
//     React.Children.forEach(this.props.children, (child) => {
//       if ((this.state.isLoggedIn !== null && child.props.showIfLoggedIn === 'true') ||
//         (this.state.isLoggedIn === null && child.props.showIfNotLoggedIn === 'true')) {
//         newChildren.push(child);
//       }
//     });
//     return (
//       <div>
//         {newChildren}
//       </div>
//     );
//   }
// }