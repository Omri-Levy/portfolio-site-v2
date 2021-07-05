import styled, { css } from 'styled-components';
import { Box } from '@material-ui/core';
import isSmDown from '../../../../../utils/isSmDown';

const StyledIllustrationGridItem = styled(Box)(() => {
	const smDown = isSmDown();

	return css`
    z-index: 5;

    svg {
      width: 100%;
      height: 599.75899px;

      ${smDown} {
        height: unset;
      }
    }
	`;
});

export default StyledIllustrationGridItem;
