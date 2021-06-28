import React from 'react';
import profilePic from './profilePic.png';


const ProfilePic: React.FunctionComponent = () => {


	return (
		<img
			src={profilePic}
			alt={`omri-levy-profile-picture`}

		/>
	);
};

export default ProfilePic;
