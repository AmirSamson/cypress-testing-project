describe('Homepage Test', () => {

    it('should have the correct page title', () => {
    cy.visit('https://example.com', { timeout: 30000 });
    cy.title().should('eq', 'Example Domain');
  });

  it('should contain specific text', () => {
    cy.visit('https://example.com');
    cy.contains('Example Domain').should('be.visible');
  });

  it('waits for Google search page to load and searches', () => {
    cy.intercept('GET', '**/search?**').as('searchRequest');
    cy.visit('https://www.google.com', { timeout: 30000 });
    cy.get('button').contains('Accept all').click({ force: true });
    cy.get('input[name="q"]', { timeout: 10000 })
      .should('be.visible')
      .type('Cypress testing{enter}');
    cy.wait('@searchRequest').its('response.statusCode').should('eq', 200);
    cy.url().should('include', 'search?q=Cypress+testing');
  });

  it('successfully logs in with valid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login', { timeout: 30000 });
    cy.get('form#login', { timeout: 10000 }).should('be.visible');
    cy.get('input[name="username"]').type('tomsmith');
    cy.get('input[name="password"]').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
    cy.get('#flash').should('contain', 'You logged into a secure area!');
    cy.url().should('include', '/secure');
  });

  it('adds and removes elements dynamically', () => {
    cy.visit('https://the-internet.herokuapp.com/add_remove_elements/', { timeout: 30000 });
    cy.get('button', { timeout: 10000 }).contains('Add Element').click();
    cy.get('#elements .added-manually').should('have.length', 1);
    cy.get('.added-manually').contains('Delete').click();
    cy.get('#elements .added-manually').should('not.exist');
  });

});