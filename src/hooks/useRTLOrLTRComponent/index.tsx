import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import { HookReturns } from './types';

const UseRTLOrLTRComponent: HookReturns = (RTLComponent, LTRComponent) => {
  const { isRTL } = useContext(ThemeContext);

  return isRTL ? RTLComponent : LTRComponent;
};

export default UseRTLOrLTRComponent;
