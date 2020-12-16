import {Box} from '@material-ui/core';
import {ConfigsGroup} from 'src/components/Layout/ConfigsGroup';
import {React} from 'src/deps';
import useDevice from 'src/hooks/useDevice/useDevice';
import {SecondaryButton} from '../../SecondaryButton';
import {ContactLinksContainer} from './ContactLinksContainer';
// @ts-ignore
import resume from './resume.pdf';
import useStyles from './useStyles';

const TopToolbar = () => {
    const classes = useStyles();
    const {isDesktop} = useDevice();

    return (
        <>
            {isDesktop && (
                <ConfigsGroup/>
            )}
            <Box className={classes.topToolbarContainer}>
                <ContactLinksContainer/>
                <SecondaryButton
                    text={'My Resume'}
                    className={classes.button}
                    onClick={() => window.open(resume)}
                />
            </Box>
        </>
    );
};

export default TopToolbar;
