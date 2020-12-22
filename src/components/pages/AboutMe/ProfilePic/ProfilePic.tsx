import Img from 'gatsby-image';
import useProfilePic from './useProfilePic';
import React from 'react';
import useStyles from './useStyles';

const ProfilePic = () => {
	const classes = useStyles();
	const { image } = useProfilePic();

	return (
		<Img
			fluid={image.childImageSharp.fluid}
			alt='Omri Levy'
			className={classes.profilePic}
		/>
	);
};

export default ProfilePic;
