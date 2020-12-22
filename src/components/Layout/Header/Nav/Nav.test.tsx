import React from 'react';
import { renderWithLocales } from '../../../../utils/testUtils';
import Nav from './Nav';
import { expect } from '@jest/globals';

describe('Nav', () => {
	it('renders', () => {
		renderWithLocales(<Nav />);

		// screen.debug();
	});

	it('contains three links', () => {
		const { container } = renderWithLocales(<Nav />);

		const links = container.querySelectorAll('a');

		expect(links).toHaveLength(3);
	});
});
