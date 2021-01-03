import React from 'react';
import useStyles from './useStyles';
import { MobileFishingBoat } from './MobileFishingBoat';
import { MobileMainScene } from './MobileMainScene';

const MobileIllustration: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<figure className={classes.mobileIllustrationContainer}>
			<MobileFishingBoat />
			<MobileMainScene />
		</figure>
	);
};

export default MobileIllustration;
