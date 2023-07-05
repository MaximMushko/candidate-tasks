class LoginPage {
    login(username, password, authService) {
      let result = false;
      
      // Call the authentication service to check the credentials
      if (authService.authenticate(username, password)) {
        // If the authentication service returns true, set the result to true
        result = true;
      }
      
      return result;
    }
  }

let loginPage = new LoginPage();
describe("Test login page", () => {
    it("Login with the valid credentials", () => {
        const credentials = {
            username: "user",
            password: "password"
        }
        
        sinon.stub(AuthService.prototype, 'authenticate', () => true});
        expect(loginPage.login(credentials.username, credentials.password)).to.be.true;
    });
    
    it("Login with invalid credentials", () => {
        const wrongCredentials = {
            username: "test",
            password: "test"
        }

        expect(loginPage.login(wrongCredentials.username, wrongCredentials.password)).to.be.false;
    })
})
