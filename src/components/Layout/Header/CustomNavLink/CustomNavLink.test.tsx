import React from 'react';
import CustomNavLink from './CustomNavLink';
import { renderWithLocales, screen } from '../../../../utils/testUtils';

describe('CustomNavLink', () => {
	it('renders', () => {
		renderWithLocales(
			<CustomNavLink text={'Portfolio'} to={'/home#portfolio'} />,
		);

		// screen.debug();
	});

	it('contains "Portfolio" in text', () => {
		const { getByText } = renderWithLocales(
			<CustomNavLink text={'Portfolio'} to={'/home#portfolio'} />,
		);

		expect(getByText(/Portfolio/)).toBeInTheDocument();
	});

	it('contains "/home#portfolio" in href', () => {
		renderWithLocales(
			<CustomNavLink text={'Portfolio'} to={'/home#portfolio'} />,
		);

		expect(screen.getByText(/Portfolio/).closest('a')).toHaveAttribute(
			'href',
			'/home#portfolio',
		);
	});
});
