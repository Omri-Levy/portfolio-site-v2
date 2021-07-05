import styled, { css } from 'styled-components';
import { ListItem } from '@material-ui/core';

const StyledListItem = styled(ListItem)(() => {
	return css`
    display: grid;
    place-content: center;
    width: unset;
	`;
});

export default StyledListItem;
