import React from 'react';
import GithubBrand from './GithubBrand';
import { renderWithProviders } from '~/utils/testUtils';

describe(`GithubBrand`, () => {
	it(`renders`, () => {
		renderWithProviders(<GithubBrand className={`test class`} />);
	});
});
