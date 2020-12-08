import {Button} from '@material-ui/core';
import {Link} from 'gatsby-theme-material-ui';
import {makeStyles, React} from '../../deps';
import {Container} from '../Container';
import FishingBoat from './FishingBoat';
import MainScene from './MainScene';
import styles from './styles';

const LandingPage: React.FC = () => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    return (
        <Container>
            <FishingBoat/>
            <Link to={'/home'}>
                <Button
                    variant='contained'
                    color={'primary'}
                    className={classes.button}
                >
                    DIVE IN
                </Button>
            </Link>
            <MainScene/>
        </Container>
    );
};

export default LandingPage;
