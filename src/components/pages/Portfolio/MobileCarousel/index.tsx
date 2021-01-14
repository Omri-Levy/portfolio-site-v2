import { CarouselProvider, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React, { useContext } from 'react';
import { v4 } from 'uuid';
import { ThemeContext } from '../../../../context/ThemeProvider';
import { ProjectsContainerProps } from '../../../../utils/types';
import MobileProjectCard from '../MobileProjectCard';
import useStyles from './useStyles';

const MobileCarousel: React.FunctionComponent<ProjectsContainerProps> = (
	{
		allProjects,
		options,
	},
) => {
	const classes = useStyles();
	const { isRTL } = useContext(ThemeContext);
	const locale = isRTL ? `he` : `en-US`;
	const filteredData = allProjects?.edges.filter(
		(project) => project.node.node_locale === locale,
	);

	return (
		<CarouselProvider
			naturalSlideHeight={175}
			naturalSlideWidth={100}
			totalSlides={3}
			isPlaying={true}
			className={classes.carouselProvider}
		>
			<Slider>
				{filteredData?.map((project, index) => (
					<MobileProjectCard
						key={v4()}
						liveSiteUrl={project.node.liveSiteUrl}
						gitRepositoryUrl={project.node.gitRepositoryUrl}
						index={index}
						title={project.node.title}
						body={JSON.parse(project.node.body.raw)}
						projectGif={project.node.projectGif.file.url}
						options={options}
					/>
				))}
			</Slider>
		</CarouselProvider>
	);
};

export default MobileCarousel;
