import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Grid, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { ButtonLink } from '~/components/ButtonLink';
import { ProjectProps } from '~/utils/types';
import { ThemeContext } from '../../../../context/ThemeContext';
import { toKebabCase } from '../../../../utils/toKebabCase';
import useStyles from './useStyles';

const ProjectCard: React.FunctionComponent<ProjectProps> = (props) => {
	const classes = useStyles();
	const projectsNotEmpty = Object.keys(props.body).length > 0;
	const { isRTL } = useContext(ThemeContext);
	const altSuffix = isRTL ? `-גיף-פרויקט` : `-project-gif`;

	return (
		<Grid container className={classes.projectCardContainer}>
			<Grid item className={classes.innerBox}>
				<Typography variant={`h2`} className={classes.title}>
					{props.title}
				</Typography>
				{projectsNotEmpty &&
					documentToReactComponents(props.body, props.options)}
				<Grid item className={classes.buttonsContainer}>
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
				</Grid>
			</Grid>
			<Grid item className={classes.imageContainer}>
				<img
					src={`props.projectGif`}
					alt={`${toKebabCase(props.title)}${altSuffix}`}
					className={classes.image}
				/>
			</Grid>
		</Grid>
	);
};

export default ProjectCard;
