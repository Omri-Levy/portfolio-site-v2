import {React} from '../../../deps';
import useDevice from '../../../hooks/useDevice/useDevice';
import {Container} from '../../Layout/Container';
import DesktopIllustration from './DesktopIllustration/DesktopIllustration';
import MobileIllustration from './MobileIllustration/MobileIllustration';
import TabletIllustration from './TabletIllustration/TabletIllustration';
import useStyles from './useStyles';

const LandingPage: React.FC = () => {
    const classes = useStyles();
    const {
        isMobile,
        isDesktop,
        isTablet,
        isIpadProWidth,
        isIpadProHeight
    } = useDevice();

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
