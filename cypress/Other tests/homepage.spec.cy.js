/**
 * TEST CASE 1002:
 * Using simple cy.get() and cy.visit() for navigating to URL. 
 */

describe('Homepage testing', () => {
    it('should check the title of the page', () => {
        cy.visit('https://google.com');
        cy.title().should('eq', 'Google');
    });

    it('check the URL of website', () => {
        cy.visit('https://google.com');
        cy.get('#W0wltc').click();
        cy.get('#APjFqb').type('cypress{enter}');

    });
})