import {Button} from 'gatsby-theme-material-ui';
import {React} from '../../deps';
import {TranslateText} from '../TranslateText';
import {Props} from './types';

const SecondaryButton: React.FC<Props> = ({
                                              text,
                                              className,
                                              to,
                                              ...props
                                          }) => {
    return (
        <Button
            to={to ?? undefined}
            //@ts-ignore
            target={to ?? '_blank'}
            variant={'outlined'}
            color={'primary'}
            className={className}
            {...props}
        >
            <TranslateText text={text}/>
        </Button>
    );
};

export default SecondaryButton;
