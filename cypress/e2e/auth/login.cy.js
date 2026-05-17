describe('Login', () => {
    it('Login válido', () => {
        cy.login();
        cy.get('[data-testid="logout"]').should('be.visible');
    });
});
