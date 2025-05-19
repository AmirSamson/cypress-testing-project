describe('Google Search Tests', () => {
  it('types into the search bar and verifies the input value', () => {
    cy.visit('https://www.google.com');
    
    cy.get('#APjFqb')
      .type('Cypress testing')
      .should('have.value', 'Cypress testing') 
      .and('be.visible') 
      .type('{enter}');
    cy.waitfortimeout(2000);
    cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click();
    cy.url().should('include', 'search?q=Cypress+testing');
    cy.get('#search').should('exist').and('be.visible');
  });
});