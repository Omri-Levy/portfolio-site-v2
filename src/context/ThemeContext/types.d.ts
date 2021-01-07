import { SetState } from '~/utils/types';

interface Theme {
	isDarkMode: boolean;
	setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
	primaryColor: string;
	setPrimaryColor: React.Dispatch<React.SetStateAction<PrimaryColor>>;
	isRTL: boolean;
	setIsRTL: SetState<boolean>;
}

export { Theme };
