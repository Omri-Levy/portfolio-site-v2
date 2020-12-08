import {Box, Typography} from '@material-ui/core';
import {WorkOutline} from '@material-ui/icons';
import {CarouselProvider, Slider} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {makeStyles, React} from '../../deps';
import {PageTitle} from '../PageTitle';
import ProjectCard from './ProjectCard/ProjectCard';
import styles from './styles';

const Portfolio: React.FC = () => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    return (
        <Box className={classes.box}
             id={'portfolio'}
        >
            <PageTitle
                Icon={WorkOutline}
                text={'Portfolio'}
            />
            <CarouselProvider naturalSlideHeight={150}
                              naturalSlideWidth={100}
                              totalSlides={3}
                              isPlaying={true}
            >
                <Slider>
                    <ProjectCard
                        liveSite={'https://prioritea.cc/'}
                        gitRepository={'https://github.com/Omri-Levy/PrioriTea'
                        }
                        index={0}
                        title={'PROJECT TITLE'}
                        text={`Lorem ipsum dolor sit amet, consectetur 
                       adipiscing elit. Mauris felis tempus urna 
                       arcu, ed cursus pellentesque euismod.`}
                        projectGif={'https://i.gifer.com/Z6N8.gif'}
                    />
                    <ProjectCard
                        liveSite={'https://prioritea.cc/'}
                        gitRepository={'https://github.com/Omri-Levy/PrioriTea'
                        }
                        index={1}
                        title={'PROJECT TITLE 2'}
                        text={`Lorem ipsum dolor sit amet, consectetur 
                       adipiscing elit. Mauris felis tempus urna 
                       arcu, ed cursus pellentesque euismod.`}
                        projectGif={'https://i.gifer.com/Z6N8.gif'}
                    />
                    <ProjectCard
                        liveSite={'https://prioritea.cc/'}
                        gitRepository={'https://github.com/Omri-Levy/PrioriTea'
                        }
                        index={2}
                        title={'PROJECT TITLE 3'}
                        text={`Lorem ipsum dolor sit amet, consectetur 
                       adipiscing elit. Mauris felis tempus urna 
                       arcu, ed cursus pellentesque euismod.`}
                        projectGif={'https://i.gifer.com/Z6N8.gif'}
                    />
                </Slider>
            </CarouselProvider>
        </Box>
    );
};

export default Portfolio;
