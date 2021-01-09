describe(`app`, () => {
	it(`works`, () => {
		cy.visit(`/`).wait(10000);
		cy.findByRole(`link`).click();
		cy.findByRole(`heading`, { name: /portfolio/i });
	});
});
