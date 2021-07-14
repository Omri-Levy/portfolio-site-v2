import { ButtonGroup } from '@material-ui/core';
import React from 'react';
import IconLink from '../../../IconLink';
import GithubBrand from '../GithubBrand';
import LinkedinBrand from '../LinkedinBrand';


const ExternalLinksContainer: React.FunctionComponent = () => {

	return (
		<ButtonGroup

			aria-label={`external-links`}
		>
			<IconLink
				Icon={LinkedinBrand}
				to={`https://www.linkedin.com/in/omri-levy-798b901b1/`}
				alt={`linkedin`}
				anchorProps={{
					title: `Navigate to LinkedIn`,
				}}
				text={`LinkedIn`}
			/>
			<IconLink
				Icon={GithubBrand}
				to={`https://github.com/Omri-Levy`}
				alt={`github`}
				anchorProps={{
					title: `Navigate to GitHub`,
				}}
				text={`GitHub`}
			/>
		</ButtonGroup>
	);
};

export default ExternalLinksContainer;
