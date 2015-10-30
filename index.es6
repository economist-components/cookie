export default class Cookie {

  getAllCookies() {
    if (typeof document !== 'undefined') {
      this.cookies = ((document || {}).cookie || '')
        .split(';')
        .map((cookie) => cookie.trim().split('=').map(decodeURIComponent))
        .reduce((cookies, cookieParts) => {
          cookies[cookieParts[0]] = cookieParts[1];
          return cookies;
        }, {});
    }
  }

  getCookie(name) {
    if (!this.cookies) {
      this.getAllCookies();
    }
    return this.cookies ? this.cookies[name] : 'undefined';
  }

}
