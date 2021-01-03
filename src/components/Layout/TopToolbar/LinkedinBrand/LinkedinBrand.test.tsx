import React from 'react';
import LinkedinBrand from './LinkedinBrand';
import { renderWithProviders } from '~/utils/testUtils';

describe(`LinkedinBrand`, () => {
	it(`renders`, () => {
		const { container } = renderWithProviders(
			<LinkedinBrand className={`test class`} />,
		);

		const icon = container.querySelector(`svg`);

		expect(icon).toBeInTheDocument();
	});
});
