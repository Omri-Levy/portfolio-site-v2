import { Box } from '@material-ui/core';
import { CarouselProvider, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React, { useContext } from 'react';
import { ThemeContext } from '../../../../context/ThemeContext';
import { ProjectsContainerProps } from '../../../../utils/types';
import { v4 } from 'uuid';
import { MobileProjectCard } from '../MobileProjectCard';

const MobileCarousel: React.FunctionComponent<ProjectsContainerProps> = ({
	allProjects,
	options,
}) => {
	const { isRTL } = useContext(ThemeContext);
	const locale = isRTL ? 'he' : 'en-US';
	const filteredData = allProjects.edges.filter(
		(project) => project.node.node_locale === locale,
	);

	return (
		<Box dir={'ltr'}>
			<CarouselProvider
				naturalSlideHeight={165}
				naturalSlideWidth={100}
				totalSlides={3}
				isPlaying={true}
			>
				<Slider>
					{filteredData.map((project, index) => (
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
		</Box>
	);
};

export default MobileCarousel;
