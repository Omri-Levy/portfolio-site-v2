import styled, { css } from 'styled-components';
import { CardMedia } from '@material-ui/core';

const StyledCardMedia = styled(CardMedia)(() => {

	return css`
    aspect-ratio: 16 / 9;

    @supports not (aspect-ratio: 16 / 9) {
      &::before {
        float: left;
        padding-top: 56.25%;
        content: '';
      }

      &::after {
        display: block;
        content: '';
        clear: both;
      }
    }
	`;
});

export default StyledCardMedia;
