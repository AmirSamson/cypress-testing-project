/**
 * TEST CASE 1003:
 * Using Assertions in one test. 
 */

describe('using assertions', () => {

    it('should check the title of the page', () => {
        cy.visit('https://google.com');
        
        cy.title().should('eq', 'Google');
    });
    it('hey', () => {
        cy.visit('https://google.com');
        cy.get('#W0wltc').click();
        cy.get('#APjFqb').type('cypress').type('{enter}')
        cy.url().should('include', 'search?q=Cypress+testing');
    });
});