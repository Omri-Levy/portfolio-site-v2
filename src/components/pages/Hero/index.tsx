import { Button, Typography } from '@material-ui/core';
import { InfoOutlined, PlayCircleFilled } from '@material-ui/icons';
import React from 'react';
import PageContainer from '../../Layout/PageContainer';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Wave from './Wave';
import { colorObj } from '../../../hooks/useMakeTheme/colors';
import Illustration from './Illustration';
import useThemeContext from '../../../context/ThemeProvider/useThemeContext';
import styled, { css } from 'styled-components';

const StyledButton = styled(Button)(({ theme }) => {
	return css`
    margin-top: ${theme.spacing(0.3)}em;
	`;
});
const StyledWaveOne = styled(Wave)(({ theme }) => {
	return css`
    position: absolute;
    bottom: 50em;
    z-index: 1;
	`;
});
const StyledWaveTwo = styled(Wave)(({ theme }) => {
	return css`
    z-index: 2;
    position: absolute;
    bottom: 50em;
	`;
});
const StyledWaveThree = styled(Wave)(({ theme }) => {
	return css`
    z-index: 3;
    position: absolute;
    bottom: 20em;
	`;
});
const StyledWaveFour = styled(Wave)(({ theme }) => {
	return css`
    z-index: 4;
    bottom: -50em;
    position: absolute;
	`;
});
const StyledAnchorLink = styled(AnchorLink)(({ theme }) => {
	return css`
    color: inherit;
    text-decoration: none;

    &:visited {
      color: inherit;
    }
	`;
});
const StyledGridContainer = styled(`div`)(({ theme }) => {

	return css`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 649px;

    @media only screen and (max-width: 62em) {
      grid-template-columns: 1fr;
    }
	`;
});
const StyledGridItem = styled(`div`)(({ theme }) => {
	return css`

	`;
});
const StyledIllustrationGridItem = styled(`div`)(({ theme }) => {
	return css`
    z-index: 5;

    svg {
      width: 100%;
      height: 599.75899px;
    }
	`;
});
const StyledWavesContainer = styled(`div`)(({ theme }) => {
	return css`
    position: absolute;
    inset: 0;
	`;
});
const StyledWavesBox = styled(`div`)(({ theme }) => {
	return css`
    position: relative;
    inset: 0;
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
		<PageContainer id={`hero`} Icon={InfoOutlined} text={``}>
			<StyledGridContainer>
				<StyledGridItem>
					<Typography variant={`h2`}>
						Omri Levy
					</Typography>
					<Typography variant={`h3`}>
						FullStack Development
					</Typography>
					<Typography variant={`h4`}>
						Front-End, Back-End, static websites, and apps
					</Typography>
					<StyledButton
						startIcon={<PlayCircleFilled />}
						variant={`contained`}
						color={`primary`}
						size={`large`}
					>
						<StyledAnchorLink to={`/#about-me`}>
							Start Here
						</StyledAnchorLink>
					</StyledButton>
				</StyledGridItem>
				<StyledIllustrationGridItem>
					<Illustration color={primaryColor.colorWithShade} />
				</StyledIllustrationGridItem>
				{/*<StyledWavesContainer>*/}
				{/*	<StyledWavesBox>*/}
				{/*		<StyledWaveOne color={color1} />*/}
				{/*		<StyledWaveTwo color={color2} />*/}
				{/*		<StyledWaveThree color={color3} />*/}
				{/*		<StyledWaveFour color={primaryColor.colorWithShade} />*/}
				{/*	</StyledWavesBox>*/}
				{/*</StyledWavesContainer>*/}
			</StyledGridContainer>
		</PageContainer>
	);
};

export default Hero;
