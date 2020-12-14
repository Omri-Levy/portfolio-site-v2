import {Box} from '@material-ui/core';
import {React} from '../../../deps';
import {SecondaryButton} from '../../SecondaryButton';
import {ContactLinksContainer} from './ContactLinksContainer';
// @ts-ignore
import resume from './resume.pdf';
import useStyles from './useStyles';

const TopToolbar = () => {
    const classes = useStyles();

    return (
        <Box className={classes.topToolbarContainer}>
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
