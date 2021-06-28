import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Card, Grid, Link, Typography } from '@material-ui/core';
import { KebabCase } from 'lodash';
import React from 'react';
import { useIntl } from 'react-intl';
import { ProjectProps } from '../../../../utils/types';


const ProjectCard: React.FunctionComponent<ProjectProps> = (props) => {

	const projectsNotEmpty = Object.keys(props.body).length > 0;
	const intl = useIntl();

	return (
		<Card>
			<Grid container>
				<Grid item>
					<Typography variant={`h2`}>
						{props.title}
					</Typography>
					{projectsNotEmpty &&
					documentToReactComponents(props.body, props.options)}
					<Grid item>
						<Link
							href={props.liveSiteUrl}
						>
							Live Site
						</Link>
						<Link
							href={props.gitRepositoryUrl}
						>
							Git Repository
						</Link>
					</Grid>
				</Grid>
				<Grid item>
					<img
						src={props.projectGif}
						alt={`${KebabCase(props.title)}${intl.formatMessage({
							id: `projectGif`,
						})}`}

					/>
				</Grid>
			</Grid>
		</Card>
	);
};

export default ProjectCard;
