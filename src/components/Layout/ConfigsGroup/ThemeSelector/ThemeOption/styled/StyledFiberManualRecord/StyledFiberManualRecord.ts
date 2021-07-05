import styled, { css } from 'styled-components';
import { FiberManualRecord } from '@material-ui/icons';

const StyledFiberManualRecord = styled(FiberManualRecord)<{ $color: string }>(({ $color }) => {
	return css`
    color: ${$color}
	`;
});

export default StyledFiberManualRecord;
