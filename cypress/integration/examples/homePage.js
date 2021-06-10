module.exports = function (user, pass) {
    cy.get('.btn').click();
    cy.get('#login-page > p:nth-child(2) > input:nth-child(1)').type(user)
    cy.get('#login-page > p:nth-child(3) > input:nth-child(1)').type(pass)
    cy.get('button.btn:nth-child(1)').click();
}