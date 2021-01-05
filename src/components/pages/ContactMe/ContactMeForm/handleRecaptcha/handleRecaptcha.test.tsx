import React from 'react';
import { renderWithProviders, screen } from '~/utils/testUtils';
import MockComponent from './MockComponent';

describe(`handleRecaptcha`, () => {
	it(`returns isRobot true`, () => {
		renderWithProviders(<MockComponent toTest={`isRobot`} />);

		expect(screen.getByRole(`checkbox`, { name: `true` })).toBeInTheDocument();
	});

	it(`returns isRobot false`, () => {
		renderWithProviders(<MockComponent toTest={`isRobot`} />);

		screen.getByRole(`checkbox`).click();

		expect(screen.getByRole(`checkbox`, { name: `false` })).toBeInTheDocument();
	});

	it(`returns empty ref object`, () => {
		renderWithProviders(<MockComponent toTest={`recaptchaValue`} />);

		expect(
			screen.getByRole(`checkbox`, { name: `{"current":{}}` }),
		).toBeInTheDocument();
	});
});
