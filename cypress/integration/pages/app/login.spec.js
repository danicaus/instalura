/// <reference types="cypress" />
import LoginScreen from '../../../../src/components/screens/LoginScreen/LoginScreen.pageObject';

describe('/pages/app/login/', () => {
  describe('when fill and submit a login request', () => {
    it('go to the profile page', () => {
      const urlIntercept = 'https://instalura-api-git-master-omariosouto.vercel.app/api/login/';
      cy.intercept(urlIntercept)
        .as('userLogin');

      const loginScreen = new LoginScreen(cy);
      loginScreen
        .fillLoginForm({ user: 'danicaus', password: 'senhaSegura' })
        .submitLoginForm();

      cy.url().should('include', '/app/profile');

      cy.wait('@userLogin')
        .then((intercept) => {
          const { token } = intercept.response.body.data;

          cy.getCookie('APP_TOKEN')
            .should('exist')
            .should('have.property', 'value', token);
        });
    });
  });
});
