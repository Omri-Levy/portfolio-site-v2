import { Box } from '@material-ui/core';
import { ConfigsGroup } from '../../Layout/ConfigsGroup';
import React from 'react';
import useDevice from '../../../hooks/useDevice/useDevice';
import useStyles from './useStyles';

const BottomToolbar = () => {
	const classes = useStyles();
	const { isDesktop, isIpadPro } = useDevice();

	if (isDesktop || isIpadPro) {
		return null;
	}

	return (
		<Box className={classes.bottomToolbarContainer}>
			<ConfigsGroup />
		</Box>
	);
};

export default BottomToolbar;
