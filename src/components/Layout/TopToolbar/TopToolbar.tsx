import { Box } from '@material-ui/core';
import { ConfigsGroup } from '../ConfigsGroup';
import React from 'react';
import useDevice from '~/hooks/useDevice/useDevice';
import { ContactLinksContainer } from './ContactLinksContainer';
// @ts-ignore
import resume from './resume.pdf';
import useStyles from './useStyles';
import { ButtonLink } from '~/components/ButtonLink';

const TopToolbar = () => {
	const classes = useStyles();
	const { isDesktop, isIpadPro } = useDevice();

	return (
		<>
			{(isDesktop || isIpadPro) && <ConfigsGroup />}
			<Box className={classes.topToolbarContainer}>
				<ContactLinksContainer />
				<ButtonLink
					variant={`secondary`}
					text={`My Resume`}
					onClick={() => window.open(resume)}
				/>
			</Box>
		</>
	);
};

export default TopToolbar;
