
/**
 * TEST CASE 1001:
 * Using different Assertions in one test. with the use of "Should()" and "Get()"
 */

describe('Google Search Tests', () => {
  it('types into the search bar and verifies the input value', () => {
    cy.visit('https://duckduckgo.com', {setTimeout: 1500});
    
    
    cy.get('#searchbox_input')
      .type('Cypress testing')
      .should('have.value', 'Cypress testing') 
      .and('be.visible') 
      .type('{enter}');

    cy.url().should('include', '=Cypress+testing');
    cy.get( '[data-testid="result"] ').should('exist').and('be.visible');
  });
});