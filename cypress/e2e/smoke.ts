describe('app', () => {
	it('works ', () => {
		cy.visit('/')
			.wait(300)
			.get('a')
			.click()
	})
});
