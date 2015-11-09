import Cookie from '../index';

describe('Cookie', () => {
  it('it get all cookies and return an objet', () => {
    document.cookie = `LogInState=LoggedIn;`;
    const cookie = new Cookie();
    cookie.getAllCookies();
    cookie.cookies.should.eql({ LogInState: 'LoggedIn' });
  });
  it('it accepts a name and can return an object or undefined if the cookie doesn\'t exist', () => {
    const cookie = new Cookie();
    cookie.getCookie('LogInState').should.equal('LoggedIn');
    const expect = chai.expect;
    expect(cookie.getCookie('Cool')).to.be.undefined;
  });
});
