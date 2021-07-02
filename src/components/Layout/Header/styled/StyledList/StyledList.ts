import styled, { css } from 'styled-components';
import { List } from '@material-ui/core';
import getCustomBreakpoints from '../../../../../utils/getCustomBreakpoints';
import isSmDown from '../../../../../utils/isSmDown';
import useThemeContext
	from '../../../../../context/ThemeProvider/useThemeContext';

const StyledList = styled(List)(({ theme }) => {
	const smDown = isSmDown();
	const lgUp = getCustomBreakpoints(`lg`, `up`);
	const { isRTL } = useThemeContext();


	return css`
    display: flex;
    justify-content: space-around;
    height: unset;
    width: min(40em, 100%);

    ${lgUp} {
      margin-right: ${isRTL ? `unset` : `${theme.spacing(1)}`};
      margin-left: ${isRTL ? `${theme.spacing(1)}em` : `unset`};
    }

    ${smDown} {
      display: grid;
      align-self: center;
      height: 50%;
      margin-right: initial;
    }
	`;
});

export default StyledList;
