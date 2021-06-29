import { Button, Grid, Typography } from '@material-ui/core';
import { InfoOutlined, PlayCircleFilled } from '@material-ui/icons';
import React from 'react';
import PageContainer from '../../Layout/PageContainer';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Wave from './Wave';
import { colorObj } from '../../../hooks/useMakeTheme/colors';
import Illustration from './Illustration';
import useThemeContext from '../../../context/ThemeProvider/useThemeContext';

const Hero: React.FunctionComponent = () => {
	const { primaryColor, isDarkMode } = useThemeContext();
	const colors1 = colorObj(isDarkMode ? 300 : 600);
	const colors2 = colorObj(isDarkMode ? 400 : 700);
	const colors3 = colorObj(isDarkMode ? 300 : 800);
	const color1 = colors1[primaryColor.color];
	const color2 = colors2[primaryColor.color];
	const color3 = colors3[primaryColor.color];

	return (
		<PageContainer id={`hero`} Icon={InfoOutlined} text={``}>
			<Grid container direction={`row`} style={{
				position: `relative`,
			}}>
				<Grid item xs={`auto`}>
					<Typography variant={`h2`}>
						Omri Levy
					</Typography>
					<Typography variant={`h3`}>
						FullStack Development
					</Typography>
					<Typography variant={`h4`}>
						Front-End, Back-End, static websites, and apps
					</Typography>
					<Button
						startIcon={<PlayCircleFilled />}
						variant={`contained`}
						color={`primary`}
						size={`large`}
						style={{
							marginTop: 20,
						}}
					>
						<AnchorLink to={`/#about-me`} gatsbyLinkProps={{
							style: {
								color: `inherit`,
								textDecoration: `none`,
								'&:visited': {
									color: `inherit`,
								},
							},
						}}>
							Start Here
						</AnchorLink>
					</Button>
				</Grid>
				<Grid item xs={1} style={{
					position: `absolute`,
					right: `30%`,
					zIndex: 1,
				}}>
					<Illustration color={primaryColor.colorWithShade} />
				</Grid>
			</Grid>
			<div style={{
				position: `absolute`,
				bottom: 400,
				left: 0,
				right: 0,
			}}>
				<div style={{
					position: `relative`,
				}}>
					<Wave
						color={color1}
						style={{
							position: `absolute`,
							bottom: `-370px`,
						}}
					/>
					<Wave
						color={color2}
						style={{
							bottom: `-410px`,
							position: `absolute`,
						}}
					/>
					<Wave
						color={color3}
						style={{
							bottom: `-500px`,
							position: `absolute`,
						}}
					/>
					<Wave
						color={primaryColor.colorWithShade}
						style={{
							bottom: `-600px`,
							position: `absolute`,
						}}
					/>
				</div>
			</div>
		</PageContainer>
	);
};

export default Hero;
