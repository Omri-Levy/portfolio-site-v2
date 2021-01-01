import React from 'react';
import { renderWithProviders, screen } from '~/utils/testUtils';
import Content from './Content';
import { Button } from '@material-ui/core';

describe(`Content`, () => {
	it(`renders`, () => {
		renderWithProviders(
			<Content>
				<Button />
			</Content>,
		);
	});

	it(`accepts children`, () => {
		renderWithProviders(
			<Content>
				<Button />
			</Content>,
		);

		expect(screen.getByRole(`button`)).toBeInTheDocument();
	});
});
