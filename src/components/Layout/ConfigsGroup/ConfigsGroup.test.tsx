import React from 'react';
import { renderWithLocales } from '../../../utils/testUtils';
import ConfigsGroup from './ConfigsGroup';

describe('ConfigsGroup', () => {
	it('renders', () => {
		renderWithLocales(<ConfigsGroup />);
	});

	it('contains theme selector', () => {
		const { getByTestId } = renderWithLocales(<ConfigsGroup />);

		expect(getByTestId('theme-selector')).toBeInTheDocument();
	});

	it('contains dark mode toggle', () => {
		const { getByTestId } = renderWithLocales(<ConfigsGroup />);

		expect(getByTestId('dark-mode-toggle')).toBeInTheDocument();
	});

	it('contains language menu', () => {
		const { getByTestId } = renderWithLocales(<ConfigsGroup />);

		expect(getByTestId('language-menu')).toBeInTheDocument();
	});
});
