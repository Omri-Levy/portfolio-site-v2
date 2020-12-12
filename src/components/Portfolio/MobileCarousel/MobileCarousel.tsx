import {CarouselProvider, Slider} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React from 'react';
import {MobileProjectCard} from '../MobileProjectCard';
import {Props} from './types';

const MobileCarousel: React.FC<Props> = ({data, options}) => {
    return (
        <CarouselProvider
            naturalSlideHeight={150}
            naturalSlideWidth={100}
            totalSlides={3}
            isPlaying={true}
        >
            <Slider>
                {data.allContentfulProject.edges.map((project, index) => (
                    <MobileProjectCard
                        liveSite={project.node.liveSiteUrl}
                        gitRepository={project.node.gitRepositoryUrl}
                        index={index}
                        title={project.node.title}
                        body={JSON.parse(project.node.body.raw)}
                        projectGif={project.node.projectGif.file.url}
                        options={options}
                    />
                ))
                }
            </Slider>
        </CarouselProvider>
    );
};

export default MobileCarousel;
