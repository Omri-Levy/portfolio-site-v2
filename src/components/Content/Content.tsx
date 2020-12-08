import {Box} from '@material-ui/core';
import {React} from '../../deps';
import {Props} from './types';

const Content: React.FC<Props> = ({children}) => {
    return (
        <Box>
            {children}
        </Box>
    );
};

export default Content;
