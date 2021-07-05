import React from 'react';
import profilePic from './profilePic.png';
import { StyledImg } from './styled/StyledImg';

const ProfilePic: React.FunctionComponent = () => {


	return (
		<StyledImg
			src={profilePic}
			alt={`omri-levy-profile-picture`}
		/>
	);
};

export default ProfilePic;
