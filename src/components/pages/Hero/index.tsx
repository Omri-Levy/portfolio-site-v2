import { Box, Button, Typography } from '@material-ui/core';
import { InfoOutlined, PlayCircleFilled } from '@material-ui/icons';
import React from 'react';
import PageContainer from '../../Layout/PageContainer';
import Wave from './Wave';
import { colorObj } from '../../../hooks/useMakeTheme/colors';
import Illustration from './Illustration';
import useThemeContext from '../../../context/ThemeProvider/useThemeContext';
import styled, { css } from 'styled-components';
import TranslateText from '../../Layout/Locales/TranslateText';
import isSmDown from '../../../utils/isSmDown';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { motion } from 'framer-motion';

const StyledButton = styled(Button)(({ theme }) => {
	return css`
    margin-top: ${theme.spacing(0.3)}em;
	`;
});
const StyledWaveOne = styled(Wave)(({ theme }) => {
	return css`
    position: absolute;
    bottom: -600px;
    z-index: 1;
	`;
});
const StyledWaveTwo = styled(Wave)(({ theme }) => {
	return css`
    z-index: 2;
    position: absolute;
    bottom: -550px;
	`;
});
const StyledWaveThree = styled(Wave)(({ theme }) => {
	return css`
    z-index: 3;
    position: absolute;
    bottom: -500px;
	`;
});
const StyledWaveFour = styled(Wave)(({ theme }) => {
	return css`
    z-index: 4;
    bottom: -400px;
    position: absolute;
	`;
});
const StyledAnchorLink = styled(AnchorLink)(({ theme }) => {
	return css`
    text-decoration: none;

    &, &:visited {
      color: inherit;
    }
	`;
});
const StyledGridContainer = styled(Box)(({ theme }) => {

	return css`
    display: grid;
    grid-template-columns: 1fr 649px;

    @media only screen and (max-width: 62em) {
      grid-template-columns: 1fr;
    }
	`;
});
const StyledGridItem = styled(motion(Box))(({ theme }) => {
	return css`

	`;
});
const StyledIllustrationGridItem = styled(Box)(({ theme }) => {
	const smDown = isSmDown();

	return css`
    z-index: 5;

    svg {
      width: 100%;
      height: 599.75899px;

      ${smDown} {
        height: unset;
      }
    }
	`;
});
const Hero: React.FunctionComponent = () => {
	const { primaryColor, isDarkMode } = useThemeContext();
	const colors1 = colorObj(isDarkMode ? 300 : 600);
	const colors2 = colorObj(isDarkMode ? 400 : 700);
	const colors3 = colorObj(isDarkMode ? 300 : 800);
	const color1 = colors1[primaryColor.color];
	const color2 = colors2[primaryColor.color];
	const color3 = colors3[primaryColor.color];

	return (
		<PageContainer id={`hero`} Icon={InfoOutlined} text={``} disableAnimation>
			<StyledGridContainer>
				<StyledGridItem
					initial={{
						x: `-100vw`,
					}}
					animate={{
						x: 0,
					}}
					transition={{ duration: 0.4 }}
				>
					<Typography variant={`h2`}>
						<TranslateText text={`Omri Levy`} />
					</Typography>
					<Typography variant={`h3`}>
						<TranslateText text={`FullStack Development`} />
					</Typography>
					<Typography variant={`h4`}>
						<TranslateText text={`skills`} />
					</Typography>
					<StyledButton
						startIcon={<PlayCircleFilled />}
						variant={`contained`}
						color={`primary`}
						size={`large`}
					>
						<StyledAnchorLink to={`/#about-me`}>
							<TranslateText text={`Start Here`} />
						</StyledAnchorLink>
					</StyledButton>
				</StyledGridItem>
				<StyledIllustrationGridItem>
					<Illustration color={primaryColor.colorWithShade} />
				</StyledIllustrationGridItem>
				{/*<StyledWaveOne color={color1} />*/}
				{/*<StyledWaveTwo color={color2} />*/}
				{/*<StyledWaveThree color={color3} />*/}
				{/*<StyledWaveFour color={primaryColor.colorWithShade} />*/}
			</StyledGridContainer>
		</PageContainer>
	);
};

export default Hero;
