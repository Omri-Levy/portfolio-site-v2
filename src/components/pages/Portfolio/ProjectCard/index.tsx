import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
	Button,
	CardActionArea,
	CardActions,
	CardContent,
	Typography,
} from '@material-ui/core';
import { kebabCase } from 'lodash';
import React from 'react';
import { useIntl } from 'react-intl';
import { ProjectProps } from '../../../../utils/types';
import TranslateText from '../../../Layout/Locales/TranslateText';
import { StyledCard, StyledCardMedia, StyledWrapper } from './styled';

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
					<CardContent>
						<Typography gutterBottom variant={`h5`} component={`h2`}>
							{props.title}
						</Typography>
						{projectsNotEmpty &&
						documentToReactComponents(props.body, props.options)}
					</CardContent>
					<CardActions>
						<Button
							target={`_blank`}
							rel='noopener'
							href={props.liveSiteUrl}
							size={`small`}
							color={`primary`}
						>
							<TranslateText text={`Live Site`} />
						</Button>
						<Button
							target={`_blank`}
							rel='noopener'
							href={props.gitRepositoryUrl}
							size={`small`}
							color={`primary`}
						>
							<TranslateText text={`Git Repository`} />
						</Button>
					</CardActions>
				</CardActionArea>
			</StyledCard>
		</StyledWrapper>
	);
};

export default ProjectCard;
