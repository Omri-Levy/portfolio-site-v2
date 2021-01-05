import generateSeverity from './generateSeverity';

describe(`generateSeverity`, () => {
	it(`returns success`, () => {
		expect(generateSeverity(`success`)).toEqual(`success`);
	});

	it(`returns warning`, () => {
		expect(generateSeverity(`robot`)).toEqual(`warning`);
		expect(generateSeverity(`cooldown`)).toEqual(`warning`);
	});

	it(`returns error`, () => {
		expect(generateSeverity(`error`)).toEqual(`error`);
		expect(generateSeverity(``)).toEqual(`error`);
	});
});
