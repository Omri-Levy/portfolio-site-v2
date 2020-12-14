import {CarouselProvider, Slider} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React from 'react';
import {v4} from 'uuid';
import {ThemeContext} from '../../../../context/ThemeContext';
import {useContext} from '../../../../deps';
import {MobileProjectCard} from '../MobileProjectCard';
import {Props} from './types';

const MobileCarousel: React.FC<Props> = ({data, options}) => {
    const {isRTL} = useContext(ThemeContext);
    const locale = isRTL ? 'he' : 'en-US';

    return (
        <CarouselProvider
            naturalSlideHeight={150}
            naturalSlideWidth={100}
            totalSlides={3}
            isPlaying={true}
        >
            <Slider>
                {data.allContentfulProject.edges.map((project, index) => {
                    if (project.node.node_locale !== locale) {
                        return;
                    }

                    let correctedIndex = index;

                    if (index < 0) {
                        correctedIndex = 1;
                    } else if (index > 3) {
                        correctedIndex = 3;
                    }

                    return (
                        <MobileProjectCard
                            key={v4()}
                            liveSite={project.node.liveSiteUrl}
                            gitRepository={project.node.gitRepositoryUrl}
                            index={correctedIndex}
                            title={project.node.title}
                            body={JSON.parse(project.node.body.raw)}
                            projectGif={project.node.projectGif.file.url}
                            options={options}
                        />
                    );
                })
                }
            </Slider>
        </CarouselProvider>
    );
};

export default MobileCarousel;
