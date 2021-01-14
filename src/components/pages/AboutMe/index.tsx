import { Grid, Typography } from '@material-ui/core';
import { InfoOutlined } from '@material-ui/icons';
import React from 'react';
import TranslateText from '../../Layout/Locales/TranslateText';
import PageContainer from '../../Layout/PageContainer';
import PageIllustration from './PageIllustration';
import ProfilePic from './ProfilePic';
import useStyles from './useStyles';

const AboutMe: React.FunctionComponent = () => {
  const classes = useStyles();

  return (
    <PageContainer id={`about-me`} Icon={InfoOutlined} text={`About Me`}>
      <Grid container className={classes.outerBox}>
        <Grid item>
          <ProfilePic />
				</Grid>
				<Grid item className={classes.innerBox}>
					<Typography variant={`h1`} className={classes.title}>
						<TranslateText text={`whoAmITitle`} />
					</Typography>
					<Typography variant={`body1`} className={classes.subtitle}>
						<TranslateText text={`whoAmISubtitle`} />
					</Typography>
					<Typography variant={`body1`} className={classes.body}>
						<TranslateText text={`whoAmIBody`} />
					</Typography>
				</Grid>
				<PageIllustration />
			</Grid>
		</PageContainer>
	);
};

export default AboutMe;
