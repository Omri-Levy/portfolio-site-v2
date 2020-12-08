import {Button} from '@material-ui/core';
import {React} from '../../deps';
import {Props} from './types';

const PrimaryButton: React.FC<Props> = ({text, className}) => {
    return (
        <Button
            variant={'contained'}
            color={'primary'}
            className={className}
        >
            {text}
        </Button>
    );
};

export default PrimaryButton;
