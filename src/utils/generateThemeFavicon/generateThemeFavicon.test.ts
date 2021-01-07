import generateThemeFavicon from './generateThemeFavicon';
import { primaryColor } from '~/hooks/useMakeTheme/colors';
import '~/utils/customMatches';

// should return true if favicon changed and false if not, but should not
// return something else or not return at all and should not throw errors

describe(`generateThemeFavicon`, () => {
	it(`returns true or false`, () => {
		expect(generateThemeFavicon(primaryColor)).toBeBoolean();
	});
});
