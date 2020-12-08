import {Button} from '@material-ui/core';
import {React} from '../../deps';
import {Props} from './types';

const SecondaryButton: React.FC<Props> = ({text, className}) => {
    return (
        <Button
            variant={'outlined'}
            color={'primary'}
            className={className}
        >
            {text}
        </Button>
    );
};

export default SecondaryButton;
