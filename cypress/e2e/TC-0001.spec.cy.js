describe('Google Search Tests', () => {
  it('types into the search bar and verifies the input value', () => {
    cy.visit('https://duckduckgo.com');
    
    cy.get('#searchbox_input')
      .type('Cypress testing')
      .should('have.value', 'Cypress testing') 
      .and('be.visible') 
      .type('{enter}');

    cy.url().should('include', '=Cypress+testing');
    cy.get('#searchbox_input').should('exist').and('be.visible');
  });
});