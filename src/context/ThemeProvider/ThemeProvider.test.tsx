import { render, screen } from '@testing-library/react';
import React from 'react';
import MockComponent from './MockComponent';
import ThemeProvider from './ThemeProvider';

describe(`ThemeProvider`, () => {
	beforeEach(() =>
		render(
			<ThemeProvider>
				<MockComponent />
			</ThemeProvider>,
		),
	);

	it(`renders`, () => {
		expect(screen.getByRole(`button`)).toBeInTheDocument();
	});
});
