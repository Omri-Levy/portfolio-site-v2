import ThemeProvider from './ThemeProvider';
import { render } from '@testing-library/react';
import React from 'react';

describe(`ThemeProvider`, () => {
	it(`renders`, () => {
		render(
			<ThemeProvider>
				<h1>test child</h1>
			</ThemeProvider>,
		);
	});
});
