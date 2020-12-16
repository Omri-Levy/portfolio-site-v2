import {ThemeContext} from 'src/context/ThemeContext';
import {useContext} from 'src/deps';
import {HookReturns} from 'src/hooks/useRTLOrLTRComponent/types';

const UseRTLOrLTRComponent: HookReturns = (RTLComponent, LTRComponent) => {
    const {isRTL} = useContext(ThemeContext);

    return isRTL ? RTLComponent : LTRComponent;
};

export default UseRTLOrLTRComponent;
