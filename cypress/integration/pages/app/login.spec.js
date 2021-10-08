/// <reference types="cypress" />

describe('/pages/app/login/', () => {
  it('preencha os campos e vá para a página /app/profile', () => {
    const urlIntercept = 'https://instalura-api-git-master-omariosouto.vercel.app/api/login/';
    cy.intercept(urlIntercept)
      .as('useLogin');

    // visitar a página de login
    cy.visit('/app/login/');
    // preencher o input de usuário
    cy.get('#formCadastro input[name="usuario"]').type('danicaus');
    // preencher o input de senha
    cy.get('#formCadastro input[name="senha"]').type('senhasegura');
    // clicar no botão de submit
    cy.get('#formCadastro button[type="submit"]').click();
    // ir para '/app/profile/'
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
