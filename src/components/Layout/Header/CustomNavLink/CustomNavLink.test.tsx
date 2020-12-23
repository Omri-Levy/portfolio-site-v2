import React from 'react';
import CustomNavLink from './CustomNavLink';
import { renderWithLocales } from '../../../../utils/testUtils';

describe('CustomNavLink', () => {
	it('renders', () => {
		renderWithLocales(
			<CustomNavLink text={'Portfolio'} to={'/home#portfolio'} />,
		);
	});

	it('contains "Portfolio" in text', () => {
		const { getByText } = renderWithLocales(
			<CustomNavLink text={'Portfolio'} to={'/home#portfolio'} />,
		);

		expect(getByText(/Portfolio/)).toBeInTheDocument();
	});

	it('contains "/home#portfolio" in href', () => {
		const { container } = renderWithLocales(
			<CustomNavLink text={'Portfolio'} to={'/home#portfolio'} />,
		);
		const link = container.querySelector('a');

		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('href', '/home#portfolio');
	});
});
