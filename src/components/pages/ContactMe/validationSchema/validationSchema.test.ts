import validationSchema from '.';

describe(`validationSchema`, () => {
	it(`validates valid form`, async () => {
		const testForm = {
			fullName: `John Doe`,
			email: `JohnDoe@gmail.com`,
			message: `test message`,
		};

		const isValid = await validationSchema.isValid(testForm);

		expect(isValid).toBeTruthy();
	});

	it(`invalidates invalid form`, async () => {
		const testForm = {
			fullName: `JohnDoe`,
			email: `JohnDoe@gmail.com`,
			message: `test message`,
		};

		const isValid = await validationSchema.isValid(testForm);

		expect(isValid).toBeFalsy();
	});
});
