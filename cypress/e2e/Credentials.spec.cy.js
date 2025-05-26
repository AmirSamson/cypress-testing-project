describe('Login Form Tests', () => {
  it('successfully logs in with valid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login', { timeout: 30000 });
    cy.get('form#login', { timeout: 10000 }).should('be.visible');
    

    cy.get('input[name="username"]').type('SAMSON');
    cy.get('input[name="password"]').type('SuperSecretPassword!');
    
    cy.get('input[name="username"]').should('have.value', 'tomsmith');
    cy.get('input[name="password"]').should('have.value', 'SuperSecretPassword!');
    
    cy.get('button[type="submit"]').click();
    
    cy.get('#flash', { timeout: 10000 })
      .should('be.visible')
      .and('contain', 'You logged into a secure area!');
    
    cy.url().should('include', '/secure');
  });

  it('shows error for invalid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login', { timeout: 30000 });
    cy.get('form#login').should('be.visible');
    
    cy.get('input[name="username"]').type('invalidUser');
    cy.get('input[name="password"]').type('wrongPassword');
    
    cy.get('button[type="submit"]').click();
    
    cy.get('#flash')
      .should('be.visible')
      .and('contain', 'Your username is invalid!');
  });
});