import { ButtonGroup } from '@material-ui/core';
import React, { useContext } from 'react';
import { IconLink } from '~/components/IconLink';
import { GithubBrand } from '../GithubBrand';
import { LinkedinBrand } from '../LinkedinBrand';
import useStyles from './useStyles';
import { ThemeContext } from '~/context/ThemeProvider';

const ExternalLinksContainer: React.FunctionComponent = () => {
	const {link, externalLinksGroup} = useStyles();
	const { isRTL } = useContext(ThemeContext);

	return (
		<ButtonGroup
			className={externalLinksGroup}
			aria-label={`external-links`}
		>
			<IconLink
				Icon={LinkedinBrand}
				to={`https://www.linkedin.com/in/omri-levy-798b901b1/`}
				alt={`linkedin`}
				mr={isRTL ? 0 : 20}
				ml={isRTL ? 20 : 0}
				linkClass={link}
			/>
			<IconLink
				Icon={GithubBrand}
				to={`https://github.com/Omri-Levy`}
				alt={`github`}
				linkClass={link}
			/>
		</ButtonGroup>
	);
};

export default ExternalLinksContainer;
