import getCustomBreakpoints from '.';

describe(`getCustomBreakpoints`, () => {
	it(`returns custom min-width media query`, () => {
		const mediaQuery = getCustomBreakpoints(`sm`, `up`);

		expect(mediaQuery).toEqual(`@media (min-width: 30em)`);
	});

	it(`returns custom max-width media query`, () => {
		const mediaQuery = getCustomBreakpoints(`sm`, `down`);

		expect(mediaQuery).toEqual(`@media (max-width: 30em)`);
	});
});
