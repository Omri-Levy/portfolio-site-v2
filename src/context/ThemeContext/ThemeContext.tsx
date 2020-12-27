import { primaryColor } from "~/hooks/useMakeTheme/colors";
import { Theme } from "./types";
import { createContext } from "react";

const theme: Theme = {
	isDarkMode: true,
	setIsDarkMode: () => true,
	primaryColor,
	setPrimaryColor: () => primaryColor,
	isRTL: false,
	setIsRTL: () => false,
};

const ThemeContext = createContext(theme);

export default ThemeContext;
