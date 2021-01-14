import { Box } from '@material-ui/core';
import React from 'react';
import Button from '../../Button';
import ExternalLinksContainer from './ExternalLinksContainer';
import resume from './resume.pdf';
import useStyles from './useStyles';

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
