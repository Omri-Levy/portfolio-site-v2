import { renderWithProviders, screen } from '~/utils/testUtils';
import Index from '../index';
import React from 'react';

describe(`index page`, () => {
	it(`renders`, () => {
		renderWithProviders(<Index />);

		expect(screen.getByRole(`figure`)).toBeInTheDocument();
		expect(screen.getByRole(`link`, { name: /dive\sin/i })).toBeInTheDocument();
	});
});
