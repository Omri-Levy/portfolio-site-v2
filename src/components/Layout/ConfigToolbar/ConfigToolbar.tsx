import { Box } from '@material-ui/core';
import { ConfigsGroup } from '../ConfigsGroup';
import React from 'react';
import useDevice from '~/hooks/useDevice/useDevice';
import useStyles from './useStyles';

const ConfigToolbar: React.FunctionComponent = () => {
	const classes = useStyles();
	const { isDesktop, isIpadPro } = useDevice();

	if (isDesktop || isIpadPro) {
		return null;
	}

	return (
		<Box className={classes.configToolbarContainer}>
			<ConfigsGroup />
		</Box>
	);
};

export default ConfigToolbar;
