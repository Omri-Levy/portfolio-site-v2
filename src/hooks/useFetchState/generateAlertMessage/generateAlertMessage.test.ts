import generateAlertMessage from './generateAlertMessage';

describe(`generateAlertMessage`, () => {
	it(`returns success message`, () => {
		expect(generateAlertMessage({ fetchState: `success` })).toEqual(
			`Message sent successfully!`,
		);
	});

	it(`returns cooldown message`, () => {
		expect(generateAlertMessage({ fetchState: `cooldown` })).toEqual(
			`Message already sent! Please try again in 5 minutes.`,
		);
	});

	it(`returns error message`, () => {
		expect(generateAlertMessage({ fetchState: `error` })).toEqual(
			`Something went wrong! Please try again later..`,
		);
	});

	it(`returns robot message`, () => {
		expect(generateAlertMessage({ fetchState: `robot` })).toEqual(
			`Please verify you are not a robot and try again.`,
		);
	});

	it(`returns custom success message`, () => {
		expect(
			generateAlertMessage({
				fetchState: `success`,
				successMessage: `success`,
			}),
		).toEqual(`success`);
	});

	it(`returns custom cooldown message`, () => {
		expect(
			generateAlertMessage({
				fetchState: `cooldown`,
				cooldownMessage: `cooldown`,
			}),
		).toEqual(`cooldown`);
	});

	it(`returns custom error message`, () => {
		expect(
			generateAlertMessage({ fetchState: `error`, errorMessage: `error` }),
		).toEqual(`error`);
	});

	it(`returns custom robot message`, () => {
		expect(
			generateAlertMessage({ fetchState: `robot`, robotMessage: `robot` }),
		).toEqual(`robot`);
	});
});
