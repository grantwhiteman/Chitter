describe('chitter', () => {
	xit('creates account', () => {
		cy.visit('/');
		cy.get('#signup').click();
		cy.get('#email').type('test@test.com');
		cy.get('#username').type('TestUser');
		cy.get('#name').type('Test Testerson');
		cy.get('#submit').click();
		cy.url().should('contain', 'home');
		cy.get('#peep-text').type('Today is my first day on Chitter!');
		cy.get('#peep-submit').click();
		cy.get('#peeps').should('contain', 'Today is my first day on Chitter!', 'TestUser');
	});
});
