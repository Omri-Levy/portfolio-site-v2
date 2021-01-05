import onCooldown from './onCooldown';

describe(`onCooldown`, () => {
	it(`returns false`, () => {
		expect(onCooldown()).toBeFalsy();
		expect(JSON.parse(<string>localStorage.getItem(`ec`))).toBeFalsy();
	});

	it(`returns true`, () => {
		localStorage.setItem(`ec`, `true`);

		expect(onCooldown()).toBeTruthy();
		expect(JSON.parse(<string>localStorage.getItem(`ec`))).toBeTruthy();
	});
});
