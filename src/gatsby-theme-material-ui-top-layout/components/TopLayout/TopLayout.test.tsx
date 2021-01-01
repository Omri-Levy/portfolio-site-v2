import { render, screen } from '@testing-library/react';
import React from 'react';
import TopLayout from './TopLayout';
import { Button } from '@material-ui/core';
import { primaryBorderColor, primaryColor } from '~/hooks/useMakeTheme/colors';

describe(`TopLayout`, () => {
	beforeEach(() => {
		render(
			<TopLayout>
				<Button color={`primary`} variant={`contained`} />
			</TopLayout>,
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
