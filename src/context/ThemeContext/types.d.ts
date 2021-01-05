import { SetState } from '~/utils/types';

type PrimaryColor = `#fb3eff` | `#3e96ff` | `#ff3e3e` | `#41ff3e` | string;

interface Theme {
	isDarkMode: boolean;
	setIsDarkMode: SetState<boolean>;
	primaryColor: PrimaryColor;
	setPrimaryColor: SetState<PrimaryColor>;
	isRTL: boolean;
	setIsRTL: SetState<boolean>;
}

export { PrimaryColor, Theme };
