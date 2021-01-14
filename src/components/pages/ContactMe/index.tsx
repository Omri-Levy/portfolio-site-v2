import { Box, useMediaQuery } from '@material-ui/core';
import {
  AlternateEmailOutlined,
  CallOutlined,
  PermContactCalendarOutlined,
} from '@material-ui/icons';
import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeProvider';
import IconLink from '../../IconLink';
import PageContainer from '../../Layout/PageContainer';
import ContactMeForm from './ContactMeForm';
import useStyles from './useStyles';

const ContactMe: React.FunctionComponent = () => {
  const { contactLinksContainer, links } = useStyles();
  const largeIcons = useMediaQuery(`(min-width: 1000px)`);
  const { isRTL } = useContext(ThemeContext);

  return (
    <PageContainer
      id={`contact-me`}
			Icon={PermContactCalendarOutlined}
			text={`Contact Me`}
		>
			<Box className={contactLinksContainer}>
				<IconLink
					to={`tel:+972052-6256647`}
					Icon={CallOutlined}
					alt={`phone-number`}
					text={`052-6256647`}
					textLineHeight={largeIcons ? 3 : 1.7}
					mr={isRTL ? 0 : 20}
					ml={isRTL ? 20 : 0}
					pr={5}
					iconPl={isRTL ? 5 : 0}
					iconPr={isRTL ? 0 : 5}
					linkClass={links}
				/>
				<IconLink
					to={`mailto:omri.levy0197@gmail.com`}
					Icon={AlternateEmailOutlined}
					alt={`email-address`}
					text={`omri.levy0197@gmail.com`}
					textLineHeight={largeIcons ? 3 : 1.7}
					pr={5}
					iconPl={isRTL ? 5 : 0}
					iconPr={isRTL ? 0 : 5}
					linkClass={links}
				/>
			</Box>
			<ContactMeForm />
		</PageContainer>
	);
};

export default ContactMe;
