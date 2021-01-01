import { render, screen } from '@testing-library/react';
import React from 'react';
import MockComponent from '~/hooks/useDevice/MockComponent';

describe(`useDevice`, () => {
	it(`isDesktop returns false`, () => {
		render(<MockComponent />);

		expect(screen.getByText(/false/i)).toBeInTheDocument();
	});
});
