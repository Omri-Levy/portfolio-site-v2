import React from 'react';
import profilePic from './profilePic.png';
import useStyles from './useStyles';

const ProfilePic: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<img
			src={profilePic}
			alt={`omri-levy-profile-picture`}
			className={classes.profilePic}
		/>
	);
};

export default ProfilePic;
