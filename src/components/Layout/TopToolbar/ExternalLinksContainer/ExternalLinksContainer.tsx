import { ButtonGroup } from '@material-ui/core';
import React, { useContext } from 'react';
import { GithubBrand } from '../GithubBrand';
import { LinkedinBrand } from '../LinkedinBrand';
import { IconLink } from '~/components/IconLink';
import useStyles from './useStyles';
import { ThemeContext } from '~/context/ThemeContext';

const ExternalLinksContainer: React.FunctionComponent = () => {
	const classes = useStyles();
	const { isRTL } = useContext(ThemeContext);

	return (
		<ButtonGroup
			className={classes.externalLinksGroup}
			aria-label={`external-links`}
		>
			<IconLink
				Icon={LinkedinBrand}
				to={`https://www.linkedin.com/in/omri-levy-798b901b1/`}
				alt={`linkedin`}
				ml={isRTL ? 20 : 0}
				mr={isRTL ? 0 : 20}
			/>
			<IconLink
				Icon={GithubBrand}
				to={`https://github.com/Omri-Levy`}
				alt={`github`}
			/>
		</ButtonGroup>
	);
};

export default ExternalLinksContainer;
