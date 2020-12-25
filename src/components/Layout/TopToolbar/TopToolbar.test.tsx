import React from 'react';
import TopToolbar from './TopToolbar';
import { renderWithLocales } from '../../../utils/testUtils';

describe('TopToolbar', () => {
	it('renders', () => {
		renderWithLocales(<TopToolbar />);
	});
});
