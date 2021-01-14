import { waitFor } from '@testing-library/dom';
import React from 'react';
import Home from '../../../pages/home';
import { renderWithProviders } from '../../../utils/testUtils';

describe(`Head`, () => {
  it(`sets the document title`, async () => {
    renderWithProviders(<Home />);
    const title = /omri\slevy\s-\sportfolio\ssite\s-\slanding\spage/i;

    await waitFor(() => expect(document.title).toMatch(title));
  });
});
