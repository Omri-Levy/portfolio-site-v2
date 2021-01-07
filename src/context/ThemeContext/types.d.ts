import React from 'react';

interface Theme {
	isDarkMode: boolean;
	setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
	primaryColor: string;
	setPrimaryColor: React.Dispatch<React.SetStateAction<PrimaryColor>>;
	isRTL: boolean;
	setIsRTL: React.Dispatch<React.SetStateAction<boolean>>;
}

export { Theme };
