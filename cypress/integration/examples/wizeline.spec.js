/// <reference types="cypress" />
var loginFrom = require('./homePage');

context('Window', () => {
  beforeEach(() => {
    cy.visit('http://testapp.galenframework.com/')
  })

  it('validate happy path by user and password correct', () => {
    loginFrom('testuser@example.com','test123')
    cy.get('#my-notes-page > h2:nth-child(1)').contains('My Notes')
    cy.end()

  })

  it('validate error for incorrect data', () => {
    loginFrom('testuser@example.com','test3')
    cy.get('#login-error-message').contains('The username or password are incorrect')
    cy.end()
  })

})
