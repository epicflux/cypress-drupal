/**
 * Drupal Collection
 */
Cypress.Commands.add("drupalLogin", (user, password) => {
    return cy.request({
        method: 'POST',
        url: '/user/login',
        form: true,
        body: {
            name: user,
            pass: password,
            form_id: 'user_login_form'
        }
    });
});

Cypress.Commands.add('drupalLogout', () => {
    return cy.request('/user/logout');
});
