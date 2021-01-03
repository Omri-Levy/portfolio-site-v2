import { Box, useMediaQuery } from '@material-ui/core';
import {
	AlternateEmailOutlined,
	CallOutlined,
	PermContactCalendarOutlined,
} from '@material-ui/icons';
import React from 'react';
import { ContactMeForm } from './ContactMeForm';
import useStyles from './useStyles';
import { PageContainer } from '~/components/Layout/PageContainer';
import { IconLink } from '~/components/IconLink';

const ContactMe: React.FunctionComponent = () => {
	const classes = useStyles();
	const largeIcons = useMediaQuery(`(min-width: 1000px)`);

	return (
		<PageContainer
			id={`contact-me`}
			Icon={PermContactCalendarOutlined}
			text={`Contact Me`}
		>
			<Box className={classes.contactLinksContainer}>
				<IconLink
					to={`tel:+972052-6256647`}
					Icon={CallOutlined}
					alt={`phone-number`}
					text={`052-6256647`}
					textLineHeight={largeIcons ? 3 : 1.7}
					mr={20}
					iconPr={5}
				/>
				<IconLink
					to={`mailto:omri.levy0197@gmail.com`}
					Icon={AlternateEmailOutlined}
					alt={`email-address`}
					text={`omri.levy0197@gmail.com`}
					textLineHeight={largeIcons ? 3 : 1.7}
					iconPr={5}
				/>
			</Box>
			<ContactMeForm />
		</PageContainer>
	);
};

export default ContactMe;
