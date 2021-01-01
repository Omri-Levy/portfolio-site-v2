import React from 'react';

type PrimaryColor = `#fb3eff` | `#3e96ff` | `#ff3e3e` | `#41ff3e` | string;

interface Theme {
	isDarkMode: boolean;
	setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
	primaryColor: PrimaryColor;
	setPrimaryColor: React.Dispatch<React.SetStateAction<PrimaryColor>>;
	isRTL: boolean;
	setIsRTL: React.Dispatch<React.SetStateAction<boolean>>;
}

export { PrimaryColor, Theme };
