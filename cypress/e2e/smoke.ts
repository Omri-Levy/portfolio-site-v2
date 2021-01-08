describe(`app`, () => {
	it(`works`, () => {
		cy.visit(`/`);
		cy.findByRole(`link`, { timeout: 10000 }).click();
		cy.findByRole(`heading`, { name: /portfolio/i });
	});
});
