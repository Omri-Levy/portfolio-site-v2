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
const StyledCardActionArea = styled(motion(CardActionArea))(({ theme }) => {

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
const StyledWrapper = styled(motion.div)(({ theme }) => {

	return css`
    display: inherit;
	`;
});

const ProjectCard: React.FunctionComponent<ProjectProps> = (props) => {
	const projectsNotEmpty = Object.keys(props.body).length > 0;
	const intl = useIntl();

	return (
		<StyledWrapper whileHover={{
			scale: 1.1,
			transition: {
				duration: 0.4,
			},
		}}>
			<StyledCard
				elevation={6}
				variants={props.variants}
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
		</StyledWrapper>
	);
};

export default ProjectCard;
