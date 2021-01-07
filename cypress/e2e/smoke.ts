describe(`app`, () => {
	it(`works`, () => {
		cy.visit(`/`);
		cy.findByRole(`link`, { name: /dive\sin/i, timeout: 10000 }).click();
	});
});
