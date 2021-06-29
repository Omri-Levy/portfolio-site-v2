import styled, { css } from 'styled-components';
import { List } from '@material-ui/core';

const StyledList = styled(List)(({ theme }) => {
	const notMobile = theme.breakpoints.up(`sm`);
	const mdUp = theme.breakpoints.up(`md`);

	return css`
    display: grid;
    align-self: center;
    height: 50%;

    ${notMobile} {
      display: flex;
      height: unset;
      width: min(500px, 100%);
    }

    ${mdUp} {
      margin-right: 95px;
    }
	`;
});

export default StyledList;
