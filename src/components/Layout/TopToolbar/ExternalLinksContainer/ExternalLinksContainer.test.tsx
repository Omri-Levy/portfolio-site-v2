import React from 'react';
import { renderWithProviders, screen } from '../../../../utils/testUtils';
import ExternalLinksContainer from './';

describe(`ExternalLinksContainer`, () => {
  beforeEach(() => renderWithProviders(<ExternalLinksContainer />));

  it(`renders`, () => {
    expect(
      screen.getByRole(`group`, { name: /external-links/i }),
    ).toBeInTheDocument();
  });

  it(`contains external links`, () => {
		const contactLinks = screen.getAllByRole(`link`);

		contactLinks.forEach((contactLink) => {
			expect(contactLink).toBeInTheDocument();
			expect(contactLink).toHaveAttribute(`href`);
		});
	});
});
