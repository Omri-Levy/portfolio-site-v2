import { createMuiTheme } from '@material-ui/core';
import getCustomBreakpoints from './index';

describe(`getCustomBreakpoints`, () => {
	const theme = createMuiTheme({
		breakpoints: {
			values: {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				ms: 800,
			},
		},
	});

	it(`returns custom min-width media query`, () => {
		const mediaQuery = getCustomBreakpoints(`ms`, theme, `up`);

		expect(mediaQuery).toEqual(`@media (min-width:800px)`);
	});

	it(`returns custom max-width media query`, () => {
		const mediaQuery = getCustomBreakpoints(`ms`, theme, `down`);

		expect(mediaQuery).toEqual(`@media (max-width:799.95px)`);
	});
});
