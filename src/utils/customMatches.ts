// eslint-disable-next-line
declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace jest {
		interface Matchers<R> {
			toBeBoolean(received: void | boolean): R;
		}
	}
}

expect.extend({
	toBeBoolean(received) {
		const type = received === null ? null : typeof received;

		return {
			pass: typeof received === `boolean`,
			message: () => `A boolean was expected. Received ${type}.`,
		};
	},
});

export default undefined;
