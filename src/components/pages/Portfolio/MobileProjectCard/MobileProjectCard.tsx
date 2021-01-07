import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Box, Typography } from '@material-ui/core';
import {
	KeyboardArrowLeftOutlined,
	KeyboardArrowRightOutlined,
} from '@material-ui/icons';
import { ButtonBack, ButtonNext, Image, Slide } from 'pure-react-carousel';
import React, { useContext } from 'react';
import { useRTLOrLTRComponent } from '~/hooks/useRTLOrLTRComponent';
import { MobileProjectProps } from '~/utils/types';
import { ThemeContext } from '../../../../context/ThemeContext';
import { toKebabCase } from '../../../../utils/toKebabCase';
import useStyles from './useStyles';
import { useTheme } from '@material-ui/core/styles';
import { ButtonLink } from '~/components/ButtonLink';

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

	return (
		<Slide index={props.index}>
			<Box dir={theme.direction}>
				<Box className={classes.innerBox}>
					<Typography variant={`h2`} className={classes.title}>
						{props.title}
					</Typography>
					{projectsNotEmpty &&
						documentToReactComponents(props.body, props.options)}
				</Box>
				<Box className={classes.imageContainer}>
					<ButtonBack className={classes.carouselBackButton}>
						{backButton}
					</ButtonBack>
					<Image
						src={`props.projectGif`}
						alt={`${toKebabCase(props.title)}${altSuffix}`}
						renderError={() => (
							<img alt={`${toKebabCase(props.title)}${altSuffix}`} />
						)}
						hasMasterSpinner={false}
					/>
					<ButtonNext className={classes.carouselNextButton}>
						{nextButton}
					</ButtonNext>
				</Box>
				<Box className={classes.buttonsContainer}>
					<ButtonLink
						variant={`primary`}
						text={`Live Site`}
						to={props.liveSiteUrl}
					/>
					<ButtonLink
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
