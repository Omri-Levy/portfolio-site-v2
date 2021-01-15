import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Box, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import {
	KeyboardArrowLeftOutlined,
	KeyboardArrowRightOutlined,
} from '@material-ui/icons';
import KebabCase from 'lodash/kebabCase';
import { ButtonBack, ButtonNext, Image, Slide } from 'pure-react-carousel';
import React, { useContext } from 'react';
import { useIntl } from 'react-intl';
import { ThemeContext } from '../../../../context/ThemeProvider';
import useRTLOrLTRComponent from '../../../../hooks/useRTLOrLTRComponent';
import { MobileProjectProps } from '../../../../utils/types';
import Link from '../../../Link';
import useStyles from './useStyles';

const MobileProjectCard: React.FunctionComponent<MobileProjectProps> = (
	props,
) => {
	const classes = useStyles();
	const theme = useTheme();
	const backButton = useRTLOrLTRComponent(
		<KeyboardArrowRightOutlined className={classes.arrowIcon} />,
		<KeyboardArrowLeftOutlined className={classes.arrowIcon} />,
	);
	const nextButton = useRTLOrLTRComponent(
		<KeyboardArrowLeftOutlined className={classes.arrowIcon} />,
		<KeyboardArrowRightOutlined className={classes.arrowIcon} />,
	);
	const projectsNotEmpty = Object.keys(props.body).length > 0;
	const { isRTL } = useContext(ThemeContext);
	const altSuffix = isRTL ? `-גיף-פרויקט` : `-project-gif`;
	const intl = useIntl();

	return (
		<Slide index={props.index}>
			<Box dir={theme.direction}>
				<Box className={classes.innerBox}>
					<Typography variant={`h2`} className={classes.title}>
						{props.projectsAmount > 1 &&
						<ButtonBack className={classes.carouselButton}>
							{backButton}
						</ButtonBack>
						}
						{props.title}
						{props.projectsAmount > 1 &&
						<ButtonNext className={classes.carouselButton}>
							{nextButton}
						</ButtonNext>
						}
					</Typography>
					{projectsNotEmpty &&
					documentToReactComponents(props.body, props.options)}
				</Box>
				<Box className={classes.imageContainer}>
					<Image
						src={props.projectGif}
						alt={`${KebabCase(props.title)}${intl.formatMessage({
							id: `projectGif`,
						})}`}
						// without renderError an empty div without alt text is loaded
						renderError={() => (
							<img alt={`${KebabCase(props.title)}${altSuffix}`} />
						)}
						hasMasterSpinner={false}
					/>
				</Box>
				<Box className={classes.buttonsContainer}>
					<Link
						variant={`primary`}
						text={`Live Site`}
						to={props.liveSiteUrl}
					/>
					<Link
						variant={`secondary`}
						text={`Git Repository`}
						to={props.gitRepositoryUrl}
					/>
				</Box>
			</Box>
		</Slide>
	);
};

export default MobileProjectCard;
