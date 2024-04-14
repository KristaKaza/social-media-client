// login.cy.js

import {
  testUrl,
  validEmail,
  validPassword,
  validUsername,
  invalidEmail,
  invalidPassword
} from '.././support/testCredentials.js'

describe('login functionality', () => {
  beforeEach(() => {
    cy.visit(testUrl)
    cy.wait(500)
    cy.get('#registerForm').should('be.visible')
  })

  it('displays a message if the login function has invalid credentials', () => {
    cy.navigateToLoginForm()
    cy.get('#loginForm').should('be.visible')
    cy.testLoginCredentials(invalidEmail, invalidPassword)
    cy.on('window:alert', (alertMessage) => {
      expect(alertMessage).to.contain(
        'Either your username was not found or your password is incorrect'
      )
    })
  })

  it('displays a login form and logs in with valid credentials', () => {
    cy.navigateToLoginForm()
    cy.get('#loginForm').should('be.visible')
    cy.testLoginCredentials(validEmail, validPassword)

    cy.get('[data-auth="logout"]').should('be.visible')

    cy.url().should('not.include', '/login')

    cy.window().then((win) => {
      const token = win.localStorage.getItem('token')
    })
  })
})
