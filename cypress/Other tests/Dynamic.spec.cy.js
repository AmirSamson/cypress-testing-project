describe('Dynamic Content Tests', () => {
  it('adds and removes elements dynamically', () => {
    cy.visit('https://the-internet.herokuapp.com/add_remove_elements/', { timeout: 30000 });

    cy.get('button', { timeout: 10000 })
      .contains('Add Element')
      .should('be.visible')
      .and('be.enabled');
    
    
    cy.get('button').contains('Add Element').click();
    

    cy.get('#elements .added-manually')
      .should('have.length', 1)
      .and('be.visible');
  

    cy.get('.added-manually').contains('Delete').click();
    

    cy.get('#elements .added-manually').should('not.exist');
  });
});