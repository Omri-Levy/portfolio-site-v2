import React from 'react';
import GithubBrand from './index';
import { renderWithProviders } from '../../../../utils/testUtils';

describe(`GithubBrand`, () => {
	it(`renders`, () => {
		const { container } = renderWithProviders(
			<GithubBrand  />,
		);

		const icon = container.querySelector(`svg`);

		expect(icon).toBeInTheDocument();
	});
});
