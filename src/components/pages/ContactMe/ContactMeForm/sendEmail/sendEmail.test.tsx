import React from 'react';
import { renderWithProviders, screen } from '~/utils/testUtils';
import MockComponent from './MockComponent';

describe(`sendEmail`, () => {
	it(`does not send email and returns robot`, () => {
		renderWithProviders(<MockComponent toTest={`isRobot`} />);

		screen.getByRole(`button`, { name: `test submit` }).click();

		expect(screen.getByText(`robot`)).toBeInTheDocument();
	});

	it(`does not send email and returns cooldown`, () => {
		renderWithProviders(<MockComponent toTest={`cooldown`} />);

		screen.getByRole(`button`, { name: `test submit` }).click();

		expect(screen.getByText(`cooldown`)).toBeInTheDocument();
	});
});
