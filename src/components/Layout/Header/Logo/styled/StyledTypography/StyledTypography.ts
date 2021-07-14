import styled, { css } from 'styled-components';
import { Typography } from '@material-ui/core';
import { StyledTypographyProps } from './types';

const StyledTypography = styled(Typography)<StyledTypographyProps>(({
																																			theme,
																																			$fontSize,
																																		}) => {
	return css`
    font-size: ${theme.typography[$fontSize].fontSize};
	`;
});

export default StyledTypography;
