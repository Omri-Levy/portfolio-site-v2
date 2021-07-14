import { SetState } from '../../utils/types';

type ThemeColors = `blue` | `red` | `green` | `purple`;

interface ThemeContextType {
	isDarkMode: boolean;
	setIsDarkMode: SetState<boolean>;
	primaryColor: {
		colorWithShade: string,
		color: ThemeColors,
	};
	setPrimaryColor: SetState<{
		colorWithShade: string,
		color: ThemeColors,
	}>;
	isRTL: boolean;
	setIsRTL: SetState<boolean>;
}

export { ThemeContextType, ThemeColors };
