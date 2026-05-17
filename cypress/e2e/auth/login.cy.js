describe('Frontend - Login', () => {
    it('Deve realizar login válido', () => {
        cy.login();
        cy.get('[data-testid="logout"]').should('be.visible');
    });
});
