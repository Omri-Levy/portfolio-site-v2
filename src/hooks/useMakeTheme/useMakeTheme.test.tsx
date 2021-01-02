import { render } from '@testing-library/react';
import React from 'react';
import MockComponent from './MockComponent';

describe(`useMakeTheme`, () => {
	it(`returns a theme`, () => {
		const { container } = render(<MockComponent />);

		expect(container.firstChild).toMatchSnapshot();
	});
});
