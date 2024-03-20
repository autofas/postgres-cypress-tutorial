declare namespace Cypress {
    interface Chainable<Subject> {
        addUser(id: number, user_name: string, email: string): any;
    }
}

Cypress.Commands.add('addUser', (id, user_name, email) => {
    cy.task('pgAddUser', { id, user_name, email });
});