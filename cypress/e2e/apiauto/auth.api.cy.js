/// <reference types="cypress" />

it('Log in', () => {
    cy.request('POST', '/api/auth/signin', {
        'email': Cypress.env('site1_email'),
        'password': Cypress.env('site1_password')
    }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(JSON.stringify(response.headers['set-cookie']));
    });
});