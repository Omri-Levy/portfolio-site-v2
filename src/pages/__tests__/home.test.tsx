import React from 'react';
import { renderWithProviders, screen } from '../../utils/testUtils';
import Home from '../home';

describe(`home page`, () => {
	it(`renders`, () => {
		renderWithProviders(<Home />);

		expect(
			screen.getByRole(`heading`, { name: /portfolio/i }),
		).toBeInTheDocument();
		expect(
			screen.getByRole(`heading`, { name: /about\sme/i }),
		).toBeInTheDocument();
		expect(
			screen.getByRole(`heading`, { name: /contact\sme/i }),
		).toBeInTheDocument();
		expect(
			screen.queryByRole(`link`, { name: /dive\sin/i }),
		).not.toBeInTheDocument();
	});
});
