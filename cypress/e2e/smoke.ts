describe(`app`, () => {
	it(`works`, () => {
		cy.visit(`/`);
		cy.findByText(/dive\sin/i).click();
	});
});
