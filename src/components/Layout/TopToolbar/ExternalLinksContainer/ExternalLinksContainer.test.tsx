import React from 'react';
import { renderWithProviders, screen } from '~/utils/testUtils/testUtils';
import ExternalLinksContainer from './ExternalLinksContainer';

describe(`ExternalLinksContainer`, () => {
	beforeEach(() => renderWithProviders(<ExternalLinksContainer />));

	it(`renders`, () => {
		renderWithProviders(<ExternalLinksContainer />);
	});

	it(`contains external links`, () => {
		const contactLinks = screen.getAllByRole(`link`);

		contactLinks.forEach((contactLink) => {
			expect(contactLink).toBeInTheDocument();
			expect(contactLink).toHaveAttribute(`href`);
		});
	});
});
