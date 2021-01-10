import { render, screen } from '@testing-library/react';
import React from 'react';
import { AppProvider } from '.';
import MockComponent from './MockComponent';

describe(`AppProvider`, () => {
	beforeEach(() =>
		render(
			<AppProvider>
				<MockComponent />
			</AppProvider>,
		),
	);

	it(`renders child`, () => {
		expect(screen.getByRole(`button`)).toBeInTheDocument();
	});
});
