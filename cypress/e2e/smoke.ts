describe(`app`, () => {
	it(`works`, () => {
		cy.visit(`/`);
		cy.findByRole(`link`, { name: /dive in/i }).click();
	});
});
