/// <reference types="cypress" />

describe('/pages/app/login/', () => {
  it('preencha os campos e vá para a página /app/profile', () => {
    //visitar a página de login
    cy.visit('/app/login/');
    //preencher o input de usuário
    cy.get('#formCadastro input[name="usuario"]').type('danicaus');
    //preencher o input de senha
    cy.get('#formCadastro input[name="senha"]').type('senhasegura');
    //clicar no botão de submit
    cy.get('#formCadastro button[type="submit"]').click();
    //ir para '/app/profile/'
    cy.url().should('include', '/app/profile')
  })
})