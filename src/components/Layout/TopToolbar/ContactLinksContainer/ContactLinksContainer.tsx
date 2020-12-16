import {Box} from '@material-ui/core';
import {React} from 'src/deps';
import GithubBrand from '../GithubBrand/GithubBrand';
import {LinkedinBrand} from '../LinkedinBrand';
import {ContactLink} from '../ContactLink';
import useStyles from './useStyles';

const ContactLinksContainer = () => {
    const classes = useStyles();

    return (
        <Box className={classes.box}>
            <ContactLink
                Icon={LinkedinBrand}
                to={'https://www.linkedin.com/in/omri-levy-798b901b1/'}
            />
            <ContactLink Icon={GithubBrand}
                         to={'https://github.com/Omri-Levy'}/>
        </Box>
    );
};

export default ContactLinksContainer;
