import { Box } from '@material-ui/core';
import {
	AlternateEmailOutlined,
	CallOutlined,
	PermContactCalendarOutlined,
} from '@material-ui/icons';
import React from 'react';
import { PageTitle } from '../../PageTitle';
import { ContactMeForm } from './ContactMeForm';
import useStyles from './useStyles';
import { IconTextLink } from './IconTextLink';

const ContactMe: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<section className={classes.contactMeContainer} id={'contact-me'}>
			<PageTitle Icon={PermContactCalendarOutlined} text={'Contact Me'} />
			<Box className={classes.outerBox}>
				<Box className={classes.innerBox1}>
					<IconTextLink
						to={'tel:+972052-6256647'}
						Icon={CallOutlined}
						text={'052-6256647'}
					/>
				</Box>
				<Box className={classes.innerBox2}>
					<IconTextLink
						to={'mailto:omri.levy0197@gmail.com'}
						Icon={AlternateEmailOutlined}
						text={'omri.levy0197@gmail.com'}
					/>
				</Box>
			</Box>
			<ContactMeForm />
		</section>
	);
};

export default ContactMe;
