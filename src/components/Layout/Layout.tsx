import {React} from 'src/deps';
import {ChildrenProps} from 'src/utils/types';
import {BottomToolbar} from './BottomToolbar';
import {Container} from './Container';
import {Content} from './Content';
import {Head} from './Head';
import {Header} from './Header';
import {Locales} from './Locales';
import {TopToolbar} from './TopToolbar';

const Layout: React.FunctionComponent<ChildrenProps> = ({children}) => {
    return (
        <Locales>
            <Container>
                <Head/>
                <Header/>
                <TopToolbar/>
                <Content>{children}</Content>
                <BottomToolbar/>
            </Container>
        </Locales>
    );
};

export default Layout;
