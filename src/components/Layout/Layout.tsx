import {Box} from '@material-ui/core';
import {React} from '../../deps';
import useDevice from '../../hooks/useDevice/useDevice';
import {BottomToolbar} from './BottomToolbar';
import {Container} from './Container';
import {Content} from './Content';
import {DarkModeToggle} from './DarkModeToggle';
import {Head} from './Head';
import {Header} from './Header';
import {LanguageMenu} from './LanguageMenu';
import {Locales} from './Locales';
import {TopToolbar} from './TopToolbar';
import {Props} from './types';
import useStyles from './useStyles';

const Layout: React.FC<Props> = ({children}) => {
    const {isDesktop} = useDevice();
    const classes = useStyles();

    return (
        <Locales>
            <Container>
                <Head/>
                <Header/>
                {isDesktop && (
                    <Box className={classes.configContainer}>
                        <LanguageMenu/>
                        <DarkModeToggle/>
                    </Box>
                )}
                <TopToolbar/>
                <Content>{children}</Content>
                <BottomToolbar/>
            </Container>
        </Locales>
    );
};

export default Layout;
