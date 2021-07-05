import { Typography } from '@material-ui/core';
import { InfoOutlined, PlayCircleFilled } from '@material-ui/icons';
import React from 'react';
import PageContainer from '../../Layout/PageContainer';
import Wave from './Wave/Wave';
import Illustration from './Illustration/Illustration';
import TranslateText from '../../Layout/Locales/TranslateText';
import { StyledIllustrationGridItem } from './styled/StyledIllustrationGridItem';
import { StyledGridItem } from './styled/StyledGridItem';
import { StyledGridContainer } from './styled/StyledGridContainer';
import { StyledButton } from './styled/StyledButton';
import { StyledAnchorLink } from './styled/StyledAnchorLink';

const Hero: React.FunctionComponent = () => {

	return (
		<PageContainer id={`hero`} Icon={InfoOutlined} text={``}
									 $disableAnimation>
			<StyledGridContainer>
				<StyledGridItem
					initial={{
						x: `-100vw`,
					}}
					animate={{
						x: 0,
					}}
					transition={{ duration: 0.4 }}
				>
					<Typography variant={`h2`}>
						<TranslateText text={`Omri Levy`} />
					</Typography>
					<Typography variant={`h3`}>
						<TranslateText text={`FullStack Development`} />
					</Typography>
					<Typography variant={`h4`}>
						<TranslateText text={`skills`} />
					</Typography>
					<StyledButton
						startIcon={<PlayCircleFilled />}
						variant={`contained`}
						color={`primary`}
						size={`large`}
					>
						<StyledAnchorLink to={`/#about-me`}>
							<TranslateText text={`Start Here`} />
						</StyledAnchorLink>
					</StyledButton>
				</StyledGridItem>
				<StyledIllustrationGridItem>
					<Illustration />
				</StyledIllustrationGridItem>
			</StyledGridContainer>
			<Wave />
		</PageContainer>
	);
};

export default Hero;
