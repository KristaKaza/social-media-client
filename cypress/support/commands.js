Cypress.Commands.add('navigateToLoginForm', () => {
  cy.get('#registerForm')
    .should('be.visible')
    .parent()
    .find('[data-auth="login"]')
    .click()
  cy.wait(500)
})

Cypress.Commands.add('testLoginCredentials', (validEmail, validPassword) => {
  cy.get('#loginEmail').type(validEmail)
  cy.get('#loginPassword').type(validPassword)
  cy.get('#loginForm').submit()
  cy.wait(1000)
})

Cypress.Commands.add('login', (url, email, password) => {
  cy.visit(url)
  cy.wait(500)
  cy.get('#registerForm').should('be.visible')
  cy.navigateToLoginForm()
  cy.get('#loginForm').should('be.visible')
  cy.get('#loginEmail').type(email)
  cy.get('#loginPassword').type(password)
  cy.get('#loginForm').submit()
  cy.wait(1000)
})
