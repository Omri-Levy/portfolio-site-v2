import {React} from '../../deps';
import {BottomToolbar} from '../BottomToolbar';
import {Container} from '../Container';
import {Content} from '../Content';
import {Header} from '../Header';
import {TopToolbar} from '../TopToolbar';
import {Props} from './types';

const Layout: React.FC<Props> = ({children}) => {
    return (
        <Container>
            <TopToolbar/>
            <Content>
                {children}
            </Content>
            <BottomToolbar/>
            <Header/>
        </Container>
    );
};

export default Layout;
