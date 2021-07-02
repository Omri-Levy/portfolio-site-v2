import { Box, Button, Typography } from '@material-ui/core';
import { Description, InfoOutlined, WorkOutline } from '@material-ui/icons';
import React from 'react';
import TranslateText from '../../Layout/Locales/TranslateText';
import PageContainer from '../../Layout/PageContainer';
import ProfilePic from './ProfilePic';
import resume from './resume.pdf';
import styled, { css } from 'styled-components';
import getCustomBreakpoints from '../../../utils/getCustomBreakpoints';
import isSmDown from '../../../utils/isSmDown';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import useThemeContext from '../../../context/ThemeProvider/useThemeContext';

const StyledGridContainer = styled(Box)(({ theme }) => {
	const mdDown = getCustomBreakpoints(`md`, `down`);

	return css`
    grid-template-columns: auto auto;
    display: grid;

    ${mdDown} {
      grid-template-columns: 1fr;
      text-align: center;
    }
	`;
});
const StyledTextContainer = styled(Box)(({ theme }) => {
	const mdDown = getCustomBreakpoints(`md`, `down`);

	return css`
    order: 1;
    max-width: 60ch;

    ${mdDown} {
      order: initial;
    }

    h1 {
      margin-bottom: ${theme.spacing(0.03)}em;
    }
	`;
});
const StyledProfilePicContainer = styled(Box)(({ theme }) => {
	const mdDown = getCustomBreakpoints(`md`, `down`);
	const { isRTL } = useThemeContext();

	return css`
    order: 2;
    margin-top: ${theme.spacing(0.2)}em;
    margin-left: ${isRTL ? `unset` : `${theme.spacing(1)}em`};
    margin-right: ${isRTL ? `${theme.spacing(1)}em` : `unset`};

    ${mdDown} {
      justify-self: center;
      order: initial;
      margin-top: 0;
      margin-left: 0;
      margin-right: 0;
    }
	`;
});
const StyledButtonsContainer = styled(Box)(({ theme }) => {
	const mdDown = getCustomBreakpoints(`md`, `down`);
	const smDown = isSmDown();
	const { isRTL } = useThemeContext();

	return css`
    order: 2;
    margin-top: ${theme.spacing(0.2)}em;
    display: flex;

    button:first-child {
      margin-right: ${isRTL ? `unset` : `${theme.spacing(0.5)}em`};
      margin-left: ${isRTL ? `${theme.spacing(0.5)}em` : `unset`};
    }

    ${mdDown} {
      button:first-child {
        margin-right: 0;
        margin-left: 0;
      }

      order: initial;
      justify-content: space-evenly;
    }

    ${smDown} {
      justify-content: space-between;
    }
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

const AboutMe: React.FunctionComponent = () => {

	const handleClick = () => {
		if (!resume) {
			return;
		}

		window.open(resume);
	};

	return (
		<PageContainer
			id={`about-me`}
			Icon={InfoOutlined}
			text={`About Me`}
		>
			<StyledGridContainer>
				<StyledProfilePicContainer>
					<ProfilePic />
				</StyledProfilePicContainer>
				<StyledTextContainer>
					<Typography variant={`h1`}>
						<TranslateText text={`whoAmITitle`} />
					</Typography>
					<Typography variant={`body1`}>
						<TranslateText text={`whoAmISubtitle`} />
					</Typography>
					<Typography variant={`body1`}>
						<TranslateText text={`whoAmIBody`} />
					</Typography>
				</StyledTextContainer>
				<StyledButtonsContainer>
					<Button
						startIcon={<WorkOutline />}
						variant={`contained`}
						color={`primary`}
					>
						<StyledAnchorLink to={`/#portfolio`}>
							<TranslateText text={`Portfolio`} />
						</StyledAnchorLink>
					</Button>
					<Button
						startIcon={<Description />}
						variant={`outlined`}
						color={`primary`}
						onClick={handleClick}
					>
						<TranslateText text={`My Resume`} />
					</Button>
				</StyledButtonsContainer>
			</StyledGridContainer>
		</PageContainer>
	);
};

export default AboutMe;
