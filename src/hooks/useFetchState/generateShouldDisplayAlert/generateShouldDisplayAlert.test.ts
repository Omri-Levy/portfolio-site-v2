import generateShouldDisplayAlert from './generateShouldDisplayAlert';

describe(`generateShouldDisplayAlert`, () => {
	it(`returns true`, () => {
		expect(generateShouldDisplayAlert(`success`)).toBeTruthy();
		expect(generateShouldDisplayAlert(`error`)).toBeTruthy();
		expect(generateShouldDisplayAlert(`cooldown`)).toBeTruthy();
		expect(generateShouldDisplayAlert(`robot`)).toBeTruthy();
	});

	it(`returns false`, () => {
		expect(generateShouldDisplayAlert(undefined)).toBeFalsy();
	});
});
