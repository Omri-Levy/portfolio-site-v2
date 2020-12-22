import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import {render} from '../../../../utils/testUtils';
import Logo from './Logo';

describe('Logo', () => {
	it('renders', () => {
		render(<Logo/>);

		// screen.debug();
	});

	it('contains "Omri Levy Fullstack Dev"', async () => {
		const {getByText} = await render(<Logo/>);

		expect(getByText(/Omri\sLevy/)).toBeInTheDocument();
		expect(getByText(/Fullstack\sDev/)).toBeInTheDocument();
	});
});
