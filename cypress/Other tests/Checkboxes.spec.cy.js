describe('checkboxes tic', () => {
   it('should be checked', () => {
    cy.visit('https://the-internet.herokuapp.com/checkboxes');
    cy.get('#checkboxes > :nth-child(1)').click();
    cy.get('#checkboxes > :nth-child(1)').check();
   });
});