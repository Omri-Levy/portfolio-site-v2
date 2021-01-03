import ThemeProvider from './ThemeProvider';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { primaryColor } from '~/hooks/useMakeTheme/colors';
import MockComponent from './MockComponent';

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

	it(`passes theme context`, () => {
		expect(screen.getByText(primaryColor)).toBeInTheDocument();
	});
});
