describe('home', () => {
	it('shows heading Chitter', () => {
		cy.visit('/');
		cy.get('h1').should('contain', 'Chitter');
	});

	it('navigates to signup', () => {
		cy.visit('/');
		cy.get('#signup').click();
		cy.url().should('contain', 'signup');
	});

	it('navigates to login', () => {
		cy.visit('/');
		cy.get('#login').click();
		cy.url().should('contain', 'login');
	});

    it("can't post a peep unless signed in", () => {
		cy.task("taskTruncateTables")
		cy.visit("/")
		cy.get('#input-peep').should('not.exist')
		cy.visit('/signup');
		cy.get('#input-email').type('test@test.com');
		cy.get('#input-username').type('TestUser');
		cy.get('#input-name').type('Test Testerson');
		cy.get('#input-password').type('TestPassword');
		cy.get('#submit').click();
		cy.url().should('contain', 'home');
        cy.get('#input-peep').type('My first Peep')
        cy.get('#submit-peep').click()
        cy.get('#peeps').should('contain', 'My first Peep')
	});
});
