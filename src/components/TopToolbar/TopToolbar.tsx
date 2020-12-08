import {Box} from '@material-ui/core';
import {makeStyles, React} from '../../deps';
import {SecondaryButton} from '../SecondaryButton';
import {ContactLinksContainer} from './ContactLinksContainer';
// @ts-ignore
import resume from './resume.pdf';
import styles from './styles';

const TopToolbar = () => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    return (
        <Box className={classes.box}>
            <ContactLinksContainer/>
            <SecondaryButton
                text={'My Resume'}
                className={classes.button}
                onClick={() => window.open(resume)}
            />
        </Box>
    );
};

export default TopToolbar;
