import {ThemeContext} from '../../context/ThemeContext';
import {React, useContext} from '../../deps';
import {Props} from './types';

const RTLOrLTRComponent: React.FC<Props> = ({RTLComponent, LTRComponent}) => {
    const {isRTL} = useContext(ThemeContext);

    return isRTL ? RTLComponent : LTRComponent;
};

export default RTLOrLTRComponent;
