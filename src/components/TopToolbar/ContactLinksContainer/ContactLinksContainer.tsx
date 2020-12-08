import {Box} from '@material-ui/core';
import {makeStyles, React} from '../../../deps';
import GithubBrand from '../../GithubBrand/GithubBrand';
import {LinkedinBrand} from '../../LinkedinBrand';
import {ContactLink} from '../ContactLink';
import styles from './styles';

const ContactLinksContainer = () => {
    const useStyles = makeStyles(styles);
    const classes = useStyles();

    return (
        <Box className={classes.box}>
            <ContactLink
                icon={<LinkedinBrand/>}
                to={'https://www.linkedin.com/in/omri-levy-798b901b1/'}
            />
            <ContactLink
                icon={<GithubBrand/>}
                to={'https://github.com/Omri-Levy'}
            />
        </Box>
    );
};

export default ContactLinksContainer;
