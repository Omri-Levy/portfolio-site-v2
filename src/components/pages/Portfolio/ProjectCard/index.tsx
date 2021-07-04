import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from '@material-ui/core';
import { kebabCase } from 'lodash';
import React from 'react';
import { useIntl } from 'react-intl';
import { ProjectProps } from '../../../../utils/types';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import TranslateText from '../../../Layout/Locales/TranslateText';
import getCustomBreakpoints from '../../../../utils/getCustomBreakpoints';

const StyledCard = styled(motion(Card))(({ theme }) => {

	return css`
    max-width: 400px;
	`;
});
const StyledCardMedia = styled(CardMedia)(({ theme }) => {

	return css`
    aspect-ratio: 16 / 9;
	`;
});
const StyledCardActionArea = styled(CardActionArea)(({ theme }) => {

	return css`

	`;
});
const StyledCardContent = styled(CardContent)(({ theme }) => {

	return css`

	`;
});
const StyledCardActions = styled(CardActions)(({ theme }) => {

	return css`

	`;
});

const ProjectCard: React.FunctionComponent<ProjectProps> = (props) => {
	const projectsNotEmpty = Object.keys(props.body).length > 0;
	const intl = useIntl();
	const noSpaceForHover = getCustomBreakpoints(`sm`, `down`, true);

	return (
		<StyledCard
			elevation={6}
			whileHover={noSpaceForHover ? undefined : {
				scale: 1.1,
				transition: { duration: 0.3 },
			}}
		>
			<StyledCardActionArea>
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
					<Typography gutterBottom variant={`h5`} component={`h2`}>
						{props.title}
					</Typography>
					{projectsNotEmpty &&
					documentToReactComponents(props.body, props.options)}
				</StyledCardContent>
				<StyledCardActions>
					<Button
						href={props.liveSiteUrl}
						size={`small`}
						color={`primary`}
					>
						<TranslateText text={`Live Site`} />
					</Button>
					<Button
						href={props.gitRepositoryUrl}
						size={`small`}
						color={`primary`}
					>
						<TranslateText text={`Git Repository`} />
					</Button>
				</StyledCardActions>
			</StyledCardActionArea>
		</StyledCard>
	);
};

export default ProjectCard;
