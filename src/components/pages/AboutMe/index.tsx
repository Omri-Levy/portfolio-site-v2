import { Button, Grid, Typography } from '@material-ui/core';
import { Description, InfoOutlined, WorkOutline } from '@material-ui/icons';
import React from 'react';
import TranslateText from '../../Layout/Locales/TranslateText';
import PageContainer from '../../Layout/PageContainer';
import ProfilePic from './ProfilePic';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import resume from './resume.pdf';

const AboutMe: React.FunctionComponent = () => {

	const handleClick = () => {
		if (!resume) {
			return;
		}

		window.open(resume);
	};

	return (
		<PageContainer id={`about-me`} Icon={InfoOutlined} text={`About Me`}>
			<Grid container>
				<Grid item>
					<ProfilePic />
				</Grid>
				<Grid item>
					<Typography variant={`h1`}>
						<TranslateText text={`whoAmITitle`} />
					</Typography>
					<Typography variant={`body1`}>
						<TranslateText text={`whoAmISubtitle`} />
					</Typography>
					<Typography variant={`body1`}>
						<TranslateText text={`whoAmIBody`} />
					</Typography>
				</Grid>
				<Grid
					item
					xs={12}

				>
					<Button
						startIcon={<WorkOutline />}
						variant={`contained`}
						color={`primary`}
					>
						<AnchorLink to={`/#portfolio`}>
							Portfolio
						</AnchorLink>
					</Button>
					<Button
						startIcon={<Description />}
						variant={`outlined`}
						color={`primary`}
						onClick={handleClick}
					>
						My Resume
					</Button>
				</Grid>
			</Grid>
		</PageContainer>
	);
};

export default AboutMe;
