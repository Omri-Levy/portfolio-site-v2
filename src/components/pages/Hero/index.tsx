import { Box, Button, Typography } from '@material-ui/core';
import { InfoOutlined, PlayCircleFilled } from '@material-ui/icons';
import React from 'react';
import PageContainer from '../../Layout/PageContainer';
import Wave from './Wave';
import Illustration from './Illustration';
import styled, { css } from 'styled-components';
import TranslateText from '../../Layout/Locales/TranslateText';
import isSmDown from '../../../utils/isSmDown';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { motion } from 'framer-motion';
import getCustomBreakpoints from '../../../utils/getCustomBreakpoints';

const StyledButton = styled(Button)(({ theme }) => {
	return css`
    margin-top: ${theme.spacing(0.3)}em;
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
	const mdDown = getCustomBreakpoints(`md`, `down`);
	const smDown = isSmDown();

	return css`
    display: grid;
    grid-template-columns: 1fr 649px;

    @media only screen and (max-width: 62em) {
      grid-template-columns: 1fr;
    }

    ${mdDown} {
      margin-top: ${theme.spacing(1)}em;
    }

    ${smDown} {
      margin-top: unset;
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

	return (
		<>
			<PageContainer id={`hero`} Icon={InfoOutlined} text={``}
										 $disableAnimation>
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
						<Illustration />
					</StyledIllustrationGridItem>
				</StyledGridContainer>
			</PageContainer>
			<Wave />
		</>
	);
};

export default Hero;
