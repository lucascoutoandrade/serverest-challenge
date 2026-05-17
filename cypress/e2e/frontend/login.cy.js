describe('Frontend - Login', () => {
  it('@login - deve realizar login válido', () => {
    cy.login();
    cy.get('[data-testid="logout"]').should('be.visible');
  });
});
