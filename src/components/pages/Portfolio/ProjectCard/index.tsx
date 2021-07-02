import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Link,
	Typography,
} from '@material-ui/core';
import { kebabCase } from 'lodash';
import React from 'react';
import { useIntl } from 'react-intl';
import { ProjectProps } from '../../../../utils/types';
import styled, { css } from 'styled-components';

const StyledCard = styled(Card)(({ theme }) => {

	return css`

	`;
});
const StyledCardMedia = styled(CardMedia)(({ theme }) => {

	return css`
    aspect-ratio: 16 / 9;
	`;
});
const StyledCardContent = styled(CardContent)(({ theme }) => {

	return css`
    flex-grow: 1;
	`;
});

const ProjectCard: React.FunctionComponent<ProjectProps> = (props) => {

	const projectsNotEmpty = Object.keys(props.body).length > 0;
	const intl = useIntl();

	return (
		<StyledCard>
			<CardActionArea>
				<StyledCardMedia
					// @ts-ignore
					component={`img`}
					image={props.projectGif}
					alt={`${kebabCase(props.title)}${intl.formatMessage({
						id: `projectGif`,
					})}`}
					title={`${kebabCase(props.title)}${intl.formatMessage({
						id: `projectGif`,
					})}`}
				/>
				<StyledCardContent>
					<Typography variant={`h2`}>
						{props.title}
					</Typography>
					{projectsNotEmpty &&
					documentToReactComponents(props.body, props.options)}
				</StyledCardContent>
				<CardActions>
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
				</CardActions>
			</CardActionArea>
		</StyledCard>
	);
};

export default ProjectCard;
