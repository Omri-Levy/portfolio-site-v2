import { Button, Typography } from '@material-ui/core';
import { Description, InfoOutlined, WorkOutline } from '@material-ui/icons';
import React from 'react';
import TranslateText from '../../Layout/Locales/TranslateText';
import PageContainer from '../../Layout/PageContainer';
import openResume from './openResume';
import ProfilePic from './ProfilePic';
import {
	StyledAnchorLink,
	StyledButtonsContainer,
	StyledGridContainer,
	StyledProfilePicContainer,
	StyledTextContainer,
} from './styled';


const AboutMe: React.FunctionComponent = () => {

	return (
		<PageContainer
			id={`about-me`}
			Icon={InfoOutlined}
			text={`About Me`}
		>
			<StyledGridContainer>
				<StyledProfilePicContainer>
					<ProfilePic />
				</StyledProfilePicContainer>
				<StyledTextContainer>
					<Typography variant={`h1`}>
						<TranslateText text={`whoAmITitle`} />
					</Typography>
					<Typography variant={`body1`}>
						<TranslateText text={`whoAmISubtitle`} />
					</Typography>
					<Typography variant={`body1`}>
						<TranslateText text={`whoAmIBody`} />
					</Typography>
				</StyledTextContainer>
				<StyledButtonsContainer>
					<Button
						startIcon={<WorkOutline />}
						variant={`contained`}
						color={`primary`}
					>
						<StyledAnchorLink to={`/#portfolio`}>
							<TranslateText text={`Portfolio`} />
						</StyledAnchorLink>
					</Button>
					<Button
						startIcon={<Description />}
						variant={`outlined`}
						color={`primary`}
						onClick={openResume}
					>
						<TranslateText text={`My Resume`} />
					</Button>
				</StyledButtonsContainer>
			</StyledGridContainer>
		</PageContainer>
	);
};

export default AboutMe;
