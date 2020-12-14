import {ThemeContext} from '../../context/ThemeContext';
import {React, useContext} from '../../deps';
import {Translation} from './types';

const useTranslations: Translation = (he, en) => {
    const {isRTL} = useContext(ThemeContext);

    return isRTL ? he : en;
};

export default useTranslations;
