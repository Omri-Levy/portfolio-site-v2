import { render, screen } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from '.';
import MockComponent from './MockComponent';

describe(`ThemeProvider`, () => {
	beforeEach(() =>
		render(
			<ThemeProvider>
				<MockComponent />
			</ThemeProvider>,
		),
	);

	it(`renders child`, () => {
		expect(screen.getByRole(`button`)).toBeInTheDocument();
	});
});
