describe('signup', () => {
	it('can get signup page', () => {
		cy.visit('/signup');
		cy.get('h1').should('contain', 'Create your account');
	});

	it('can sign up once but not twice', () => {
		cy.task("taskTruncateTables")
		cy.visit('/signup');
		cy.get('#input-email').type('test@test.com');
		cy.get('#input-username').type('TestUser');
		cy.get('#input-name').type('Test Testerson');
		cy.get('#input-password').type('TestPassword');
		cy.get('#submit').click();
		cy.url().should('contain', 'home');
		cy.visit('/signup');
		cy.get('#input-email').type('test@test.com');
		cy.get('#input-username').type('TestUser');
		cy.get('#input-name').type('Test Testerson');
		cy.get('#input-password').type('TestPassword');
		cy.get('#submit').click();
		cy.url().should('contain', 'register');
	});

	it('can sign out', () => {
		cy.task("taskTruncateTables")
		cy.visit('/signup');
		cy.get('#input-email').type('test@test.com');
		cy.get('#input-username').type('TestUser');
		cy.get('#input-name').type('Test Testerson');
		cy.get('#input-password').type('TestPassword');
		cy.get('#submit').click();
		cy.url().should('contain', 'home');
		cy.get('#signout').click();
		cy.get('#input-peep').should('not.exist')
	});

	it('can log in', () => {
		cy.task("taskTruncateTables")
		cy.visit('/signup');
		cy.get('#input-email').type('test@test.com');
		cy.get('#input-username').type('TestUser');
		cy.get('#input-name').type('Test Testerson');
		cy.get('#input-password').type('TestPassword');
		cy.get('#submit').click();
		cy.url().should('contain', 'home');
		cy.get('#signout').click();
		cy.get('#login').click();
		cy.get('#input-email').type('test@test.com');
		cy.get('#input-password').type('TestPassword');
		cy.get('#submit').click();
        cy.get('#input-peep').type('My first Peep')
        cy.get('#submit-peep').click()
        cy.get('#peeps').should('contain', 'My first Peep')
	});
});