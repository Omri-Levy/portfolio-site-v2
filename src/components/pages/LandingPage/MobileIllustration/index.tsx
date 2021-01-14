import React from 'react';
import MobileFishingBoat from './MobileFishingBoat';
import MobileMainScene from './MobileMainScene';
import useStyles from './useStyles';

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
