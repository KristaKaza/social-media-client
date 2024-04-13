describe('Login Fail Test', () => {
  it('should give alert when logging in with invalid credentials', () => {
    cy.visit(`https://KristaKaza.github.io/social-media-client-ca/`)
    cy.wait(1000)
    cy.get(
      '#registerForm > div.modal-footer > button.btn-outline-success'
    ).click()
    cy.wait(1000)
    cy.get(`#loginEmail`).type(`krikaz9483@noroff.no`)
    cy.get(`#loginPassword`).type(`password`)
    cy.wait(1000)
    cy.get(`button.btn-success`).contains('Login').click()
    cy.wait(500)
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contain(
        'Either your username was not found or your password is incorrect'
      )
    })
  })
})
