import React from 'react';
import { SetState } from '~/utils/types';

interface Theme {
	isDarkMode: boolean;
	setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
	primaryColor: string;
	setPrimaryColor: React.Dispatch<React.SetStateAction<PrimaryColor>>;
	isRTL: boolean;
	setIsRTL: SetState<boolean>;
	isLandingPage: boolean;
	setIsLandingPage: SetState<boolean>;
}

export { Theme };
