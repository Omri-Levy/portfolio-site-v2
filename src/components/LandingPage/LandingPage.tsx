import {useMediaQuery} from '@material-ui/core';
import {React} from '../../deps';
import {Container} from '../Container';
import DesktopIllustration from './DesktopIllustration';
import MobileIllustration from './MobileIllustration';
import TabletIllustration from './TabletIllustration';
import useStyles from './useStyles';

const LandingPage: React.FC = () => {
    const classes = useStyles();
    const isDesktop = useMediaQuery((theme) => (
        theme.breakpoints.up('mlg'))
    );
    const isTablet = useMediaQuery((theme) => (
        theme.breakpoints.down('md')
    ));
    const isMobile = useMediaQuery((theme) => (
        theme.breakpoints.down('sm')
    ));
    const isIpadProWidth = useMediaQuery('(width: 1024px)');
    const isIpadProHeight = useMediaQuery('(height: 1366px)');

    let content;

    if (isMobile || (isIpadProWidth && isIpadProHeight)) {
        content = <MobileIllustration classes={classes}/>;
    } else if (isDesktop) {
        content = <DesktopIllustration/>;
    } else if (isTablet) {
        content = <TabletIllustration/>;
    } else {
        content = <TabletIllustration/>;
    }

    return (
        <Container>
            {content}
        </Container>
    );
};

export default LandingPage;
