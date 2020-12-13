import {React, useMediaQuery, useTheme} from '../../deps';
import {MediaQueries} from './types';

const useDevice: MediaQueries = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isIpadProWidth = useMediaQuery('(width: 1024px)');
    const isIpadProHeight = useMediaQuery('(height: 1366px)');

    return {
        isDesktop,
        isTablet,
        isMobile,
        isIpadProWidth,
        isIpadProHeight
    };
};

export default useDevice;
