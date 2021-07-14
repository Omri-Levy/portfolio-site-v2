import React from 'react';
import LinkedinBrand from './index';
import { renderWithProviders } from '../../../../utils/testUtils';

describe(`LinkedinBrand`, () => {
	it(`renders`, () => {
		const { container } = renderWithProviders(
			<LinkedinBrand  />,
		);

		const icon = container.querySelector(`svg`);

		expect(icon).toBeInTheDocument();
	});
});
