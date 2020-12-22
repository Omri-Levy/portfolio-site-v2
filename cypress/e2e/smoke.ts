describe('app', () => {
	it('works', () => {
		cy.visit('/').wait(0.1).get('a').click();
	});
});
