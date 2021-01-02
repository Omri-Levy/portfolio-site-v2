import React from 'react';
import GithubBrand from './GithubBrand';
import { renderWithProviders } from '~/utils/testUtils';

describe(`GithubBrand`, () => {
	it(`renders`, () => {
		const { container } = renderWithProviders(
			<GithubBrand className={`test class`} />,
		);

		const icon = container.querySelector(`svg`);

		expect(icon).toBeInTheDocument();
	});
});
