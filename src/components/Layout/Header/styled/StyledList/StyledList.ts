import styled, { css } from 'styled-components';
import { List } from '@material-ui/core';
import getCustomBreakpoints from '../../../../../utils/getCustomBreakpoints';
import isSmDown from '../../../../../utils/isSmDown';

const StyledList = styled(List)(({ theme }) => {
	const smDown = isSmDown();
	const lgUp = getCustomBreakpoints(`lg`, `up`);


	return css`
    display: flex;
    justify-content: space-around;
    height: unset;
    width: min(40em, 100%);

    ${lgUp} {
      margin-inline-end: ${theme.spacing(1)}em;
    }

    ${smDown} {
      display: grid;
      align-self: center;
      height: 50%;
      margin-right: initial;
      margin-left: initial;
    }
	`;
});

export default StyledList;
