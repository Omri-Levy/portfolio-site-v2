import React from 'react';
import useStyles from './useStyles';
import profilePic from './profilePic.png';

const ProfilePic: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<img
			src={profilePic}
			alt={`Omri Levy - profile picture`}
			className={classes.profilePic}
		/>
	);
};

export default ProfilePic;
