import React from 'react';
import profilePic from './profilePic.png';
import styled, { css } from 'styled-components';

const StyledImg = styled(`img`)(({ theme }) => {
	return css`
    border-radius: 100vh;
    width: 15em;
    height: 15em;
    background-color: ${theme.palette.primary.main};
	`;
});

const ProfilePic: React.FunctionComponent = () => {


	return (
		<StyledImg
			src={profilePic}
			alt={`omri-levy-profile-picture`}

		/>
	);
};

export default ProfilePic;
