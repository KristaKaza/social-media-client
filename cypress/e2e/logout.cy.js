describe('Logout Test', () => {
  it('should log in with valid credentials, then log out again', () => {
    cy.visit(`https://kristakaza.github.io/social-media-client/`)
    cy.wait(1000)
    cy.get(
      '#registerForm > div.modal-footer > button.btn-outline-success'
    ).click()
    cy.wait(1000)
    cy.get(`#loginEmail`).type(`torber51739@stud.noroff.no`)
    cy.get(`#loginPassword`).type(`testtest`)
    cy.wait(1000)
    cy.get(`button.btn-success`).contains('Login').click()
    cy.wait(2000)
    cy.get('button.btn-outline-warning').contains('Logout').click()
    cy.wait(2000)
    cy.get('#registerForm > div.modal-footer > button.btn-outline-success')
      .contains('Login')
      .should('exist')
  })
})

or
describe('Logout function', () => {
  it('Logs in the user and log out.', () => {
    cy.OpenLogInForm()
    cy.loginWithValidUser()
    cy.IsLoggedIn()
    cy.wait(1000)
    cy.get('button[data-auth="logout"]').click()
    cy.IsLoggedOut()
  })
})
