import { useContext } from 'react';
import { AppContext } from './index';

const useAppContext = () => useContext(AppContext);

export default useAppContext;
