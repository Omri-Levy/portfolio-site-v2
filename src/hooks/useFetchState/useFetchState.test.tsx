import React from 'react';
import { renderWithProviders } from '../../utils/testUtils';
import MockComponent from './MockComponent';

describe(`useFetchState`, () => {
	it(`matches snapshot`, () => {
		const { container } = renderWithProviders(<MockComponent />);

		expect(container).toMatchSnapshot();
	});
});
