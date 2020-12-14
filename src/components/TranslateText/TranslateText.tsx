import {FormattedMessage} from 'react-intl';
import {React} from '../../deps';
import {Props} from './types';
import {camelCase} from 'lodash';

const TranslateText: React.FC<Props> = ({text}) => {
    return (
        <FormattedMessage
            id={camelCase(text)}
            defaultMessage={text}
        />
    );
};

export default TranslateText;
