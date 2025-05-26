describe('Slow Page Load Tests', () => {
  it('waits for dynamically loaded content', () => {
    cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1', { timeout: 30000 });



    cy.get('button', { timeout: 10000 }).should('be.visible').click();
    
    cy.get('#loading', { timeout: 15000 }).should('not.be.visible');
    
    cy.get('#finish')
      .should('be.visible')
      .and('contain', 'Hello World!');
  });
});