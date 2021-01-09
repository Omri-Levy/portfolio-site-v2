import { render, screen } from '@testing-library/react';
import React from 'react';
import MockComponent from './MockComponent';

describe(`ThemeTopLayout`, () => {
	beforeEach(() => {
		render(<MockComponent />);
	});

	it(`accepts children`, () => {
		expect(screen.getByRole(`button`)).toBeInTheDocument();
	});
});
