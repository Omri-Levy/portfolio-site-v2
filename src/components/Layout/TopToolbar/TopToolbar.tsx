import { Box } from '@material-ui/core';
import React from 'react';
import { ExternalLinksContainer } from './ExternalLinksContainer';
import useStyles from './useStyles';
import Button from '~/components/Button';
import resume from './resume.pdf';

const TopToolbar: React.FunctionComponent = () => {
	const classes = useStyles();
	const handleClick = () => {
		if (!resume) {
			return;
		}

		window.open(resume);
	};

	return (
		<Box className={classes.topToolbarContainer}>
			<ExternalLinksContainer />
			<Button
				variant={`secondary`}
				text={`My Resume`}
				onClick={handleClick}
			/>
		</Box>
	);
};

export default TopToolbar;
