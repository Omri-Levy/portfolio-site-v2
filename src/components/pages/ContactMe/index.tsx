import { Box } from '@material-ui/core';
import {
	AlternateEmailOutlined,
	CallOutlined,
	PermContactCalendarOutlined,
} from '@material-ui/icons';
import React from 'react';
import IconLink from '../../IconLink';
import PageContainer from '../../Layout/PageContainer';
import ContactMeForm from './ContactMeForm';
import ExternalLinksContainer from './ExternalLinksContainer';

const ContactMe: React.FunctionComponent = () => {

	return (
		<PageContainer
			id={`contact-me`}
			Icon={PermContactCalendarOutlined}
			text={`Contact Me`}
		>
			<Box>
				<IconLink
					to={`tel:+972052-6256647`}
					Icon={CallOutlined}
					alt={`phone-number`}
					text={`052-6256647`}
				/>
				<IconLink
					to={`mailto:omri.levy0197@gmail.com`}
					Icon={AlternateEmailOutlined}
					alt={`email-address`}
					text={`omri.levy0197@gmail.com`}
				/>
				<ExternalLinksContainer />
			</Box>
			<ContactMeForm />
		</PageContainer>
	);
};

export default ContactMe;
