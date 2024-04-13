describe('Logout Test', () => {
  it('should log in with valid credentials, then log out again', () => {
    cy.visit(`https://KristaKaz.github.io/social-media-client-ca/`)
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
    cy.get('#registerForm > div.modal-footer > button.btn-outline-success')
      .contains('Login')
      .should('exist')
  })
})
