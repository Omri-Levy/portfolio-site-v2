import React from 'react';
import ButtonLink from './ButtonLink';
import { renderWithLocales } from '../../utils/testUtils';

describe('ButtonLink', () => {
	it('renders primary', () => {
		renderWithLocales(
			<ButtonLink variant={'primary'} text={'primary test text'} />,
		);
	});
});
