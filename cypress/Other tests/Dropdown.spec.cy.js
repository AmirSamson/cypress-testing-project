describe('Dropdown Tests', () => {
  it('selects an option from a dropdown', () => {
    cy.visit('https://the-internet.herokuapp.com/dropdown', { timeout: 30000 });

    cy.get('select#dropdown', { timeout: 10000 }).should('be.visible');
    
    cy.get('select#dropdown').select('Option 1');
    
    cy.get('select#dropdown')
      .should('have.value', '1')
      .find('option:selected')
      .should('have.text', 'Option 1');
    
    cy.get('select#dropdown').select('Option 2');
    
    cy.get('select#dropdown').should('have.value', '2');
  });
});