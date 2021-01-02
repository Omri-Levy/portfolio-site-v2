import React from 'react';
import { renderWithProviders } from '~/utils/testUtils';
import { waitFor } from '@testing-library/dom';
import Home from '~/pages/home';

describe(`Head`, () => {
	it(`sets the document title`, async () => {
		renderWithProviders(<Home />);
		const title = `Omri Levy - Portfolio Site - Landing page`;

		await waitFor(() => expect(document.title).toEqual(title));
	});
});
