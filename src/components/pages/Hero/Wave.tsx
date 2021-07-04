import React, {
	DetailedHTMLProps,
	FunctionComponent,
	HTMLAttributes,
} from 'react';
import useThemeContext from '../../../context/ThemeProvider/useThemeContext';
import { colorObj } from '../../../hooks/useMakeTheme/colors';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

interface WaveProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
};

const StyledSvg = styled(motion.svg)(({ theme }) => {
	return css`
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
	`;
});

const Wave: FunctionComponent<WaveProps> = () => {
	const { primaryColor, isDarkMode } = useThemeContext();
	const colors1 = colorObj(isDarkMode ? 300 : 600);
	const colors2 = colorObj(isDarkMode ? 400 : 700);
	const colors3 = colorObj(isDarkMode ? 500 : 800);
	const color1 = colors1[primaryColor.color];
	const color2 = colors2[primaryColor.color];
	const color3 = colors3[primaryColor.color];

	if (typeof window === `undefined`) {
		return null;
	}

	return (
		<StyledSvg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 1440 336'
			fill='none'
		>
			<path fill={color1}
						d='M0 270.222l48-5.594c48-6.017 144-16.572 240-56.367 96-39.372 192-106.928 288-123.817 96-16.888 192 16.889 288 39.373 96 22.905 192 33.461 288 11.294 96-22.167 192-79.167 240-106.928L1440 0v304H0v-33.778z' />
			<path fill={color2}
						d='M0 303.222l48-5.594c48-6.017 144-16.572 240-56.367 96-39.372 192-106.928 288-123.817 96-16.888 192 16.889 288 39.373 96 22.905 192 33.461 288 11.294 96-22.167 192-79.167 240-106.928L1440 33v304H0v-33.778z' />
			<path fill={color3}
						d='M0 372.222l48-5.594c48-6.017 144-16.572 240-56.367 96-39.372 192-106.928 288-123.817 96-16.888 192 16.889 288 39.373 96 22.905 192 33.461 288 11.294 96-22.167 192-79.167 240-106.928L1440 102v304H0v-33.778z' />
			<path fill={primaryColor.colorWithShade}
						d='M0 458.222l48-5.594c48-6.017 144-16.572 240-56.367 96-39.372 192-106.928 288-123.817 96-16.888 192 16.889 288 39.373 96 22.905 192 33.461 288 11.294 96-22.167 192-79.167 240-106.928L1440 188v304H0v-33.778z' />
		</StyledSvg>
	);
};

export default Wave;
