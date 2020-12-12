import {Box, useMediaQuery} from '@material-ui/core';
import {React} from '../../deps';
import {BottomToolbar} from '../BottomToolbar';
import {Container} from '../Container';
import {Content} from '../Content';
import {DarkModeToggle} from '../DarkModeToggle';
import {Head} from '../Head';
import {Header} from '../Header';
import {Language} from '../Language';
import {TopToolbar} from '../TopToolbar';
import './index.css';
import {Props} from './types';
import useStyles from './useStyles';

const Layout: React.FC<Props> = ({children}) => {
    const isDesktop = useMediaQuery((theme) => (
        theme.breakpoints.up('md')
    ));
    const classes = useStyles();

    return (
        <Container>
            <Head/>
            <Header/>
            {isDesktop && (
                <Box className={classes.configContainer}>
                    <Language/>
                    <DarkModeToggle/>
                </Box>
            )}
            <TopToolbar/>
            <Content>{children}</Content>
            <BottomToolbar/>
        </Container>
    );
};

export default Layout;
