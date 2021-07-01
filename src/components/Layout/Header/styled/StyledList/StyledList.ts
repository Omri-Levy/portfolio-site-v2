import styled, { css } from 'styled-components';
import { List } from '@material-ui/core';
import getCustomBreakpoints from '../../../../../utils/getCustomBreakpoints';

const StyledList = styled(List)(({ theme }) => {
	const smDown = getCustomBreakpoints(`sm`, `down`) as string;
	const lgUp = getCustomBreakpoints(`lg`, `up`) as string;


	return css`
    display: flex;
    justify-content: space-around;
    height: unset;
    width: min(40em, 100%);

    ${lgUp} {
      margin-right: ${theme.spacing(1)}em;
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
