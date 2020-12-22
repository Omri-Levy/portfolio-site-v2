import React from 'react';
import { renderWithLocales } from '../../../utils/testUtils';
import Header from './Header';

describe('Header', () => {
	it('renders', () => {
		renderWithLocales(<Header />);

		// screen.debug();
	});
});
