describe(`app`, () => {
	it(`works`, () => {
		cy.visit(`/`);
		cy.wait(0.1);
		cy.findByRole(`link`, { name: /dive in/i }).click();
	});
});
