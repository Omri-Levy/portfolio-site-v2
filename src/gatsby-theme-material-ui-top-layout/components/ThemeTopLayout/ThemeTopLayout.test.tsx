import { render, screen } from '@testing-library/react';
import React from 'react';
import { primaryBorderColor, primaryColor } from '~/hooks/useMakeTheme/colors';
import MockComponent from './MockComponent';

describe(`ThemeTopLayout`, () => {
	beforeEach(() => {
		render(<MockComponent />);
	});

	it(`accepts children`, () => {
		expect(screen.getByRole(`button`)).toBeInTheDocument();
	});

	it(`passes down the theme`, () => {
		expect(screen.getByRole(`button`)).toHaveStyle({
			'border-top-color': primaryBorderColor(primaryColor),
		});
	});
});
