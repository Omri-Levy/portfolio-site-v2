import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useIntl } from 'react-intl';
import { ButtonLink } from '~/components/ButtonLink';
import KebabCase from 'lodash/kebabCase';
import { ProjectProps } from '~/utils/types';
import useStyles from './useStyles';

const ProjectCard: React.FunctionComponent<ProjectProps> = (props) => {
	const classes = useStyles();
	const projectsNotEmpty = Object.keys(props.body).length > 0;
	const intl = useIntl();

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
					alt={`${KebabCase(props.title)}${intl.formatMessage({
						id: `projectGif`,
					})}`}
					className={classes.image}
				/>
			</Grid>
		</Grid>
	);
};

export default ProjectCard;
