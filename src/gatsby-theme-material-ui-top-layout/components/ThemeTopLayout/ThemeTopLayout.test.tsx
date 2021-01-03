import { render, screen } from '@testing-library/react';
import React from 'react';
import ThemeTopLayout from './/ThemeTopLayout';
import { Button } from '@material-ui/core';
import { primaryBorderColor, primaryColor } from '~/hooks/useMakeTheme/colors';

describe(`ThemeTopLayout`, () => {
	beforeEach(() => {
		render(
			<ThemeTopLayout>
				<Button color={`primary`} variant={`contained`} />
			</ThemeTopLayout>,
		);
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
