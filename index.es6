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
