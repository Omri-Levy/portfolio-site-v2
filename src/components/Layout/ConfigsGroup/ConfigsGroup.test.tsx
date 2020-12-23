import React from 'react';
import { renderWithLocales } from '../../../utils/testUtils';
import ConfigsGroup from './ConfigsGroup';

describe('ConfigsGroup', () => {
	it('renders', () => {
		renderWithLocales(<ConfigsGroup />);
	});

	it('contains theme selector', () => {
		expect('');
	});
});
