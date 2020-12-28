import { Box } from '@material-ui/core';
import React from 'react';
import useStyles from './useStyles';
import { MobileFishingBoat } from './MobileFishingBoat';
import { MobileMainScene } from './MobileMainScene';

const MobileIllustration: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<Box className={classes.mobileIllustrationContainer}>
			<MobileFishingBoat />
			<MobileMainScene />
		</Box>
	);
};

export default MobileIllustration;
