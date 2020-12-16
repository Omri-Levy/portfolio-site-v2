import {React} from 'src/deps';
import useDevice from 'src/hooks/useDevice/useDevice';
import {Container} from '../../Layout/Container';
import {DesktopIllustration} from './DesktopIllustration';
import {MobileIllustration} from './MobileIllustration';
import {TabletIllustration} from './TabletIllustration';
import useStyles from './useStyles';

const LandingPage: React.FunctionComponent = () => {
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


