import styled, { css } from 'styled-components';
import { Typography } from '@material-ui/core';

const StyledTypography = styled(Typography)(() => {


	return css`
    min-height: 7em;
	`;
});

export default StyledTypography;
