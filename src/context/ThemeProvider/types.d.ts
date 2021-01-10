import { SetState } from '~/utils/types';

interface Theme {
	isDarkMode: boolean;
	setIsDarkMode: SetState<boolean>;
	primaryColor: string;
	setPrimaryColor: SetState<PrimaryColor>;
	isRTL: boolean;
	setIsRTL: SetState<boolean>;
	isLandingPage: boolean;
	setIsLandingPage: SetState<boolean>;
}

export { Theme };
