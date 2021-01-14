import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Grid, Typography } from '@material-ui/core';
import KebabCase from 'lodash/kebabCase';
import React from 'react';
import { useIntl } from 'react-intl';
import { ProjectProps } from '../../../../utils/types';
import Link from '../../../Link';
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
