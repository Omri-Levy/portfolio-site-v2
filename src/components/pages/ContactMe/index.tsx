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
import styled, { css } from 'styled-components';
import useThemeContext from '../../../context/ThemeProvider/useThemeContext';

const StyledBox = styled(Box)(({ theme }) => {
	return css`
    display: grid;
    justify-content: center;
	`;
});
const StyledLinksContainer = styled(Box)(({ theme }) => {
	const { isRTL } = useThemeContext();

	return css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing(0.1)}em;
    margin-bottom: ${theme.spacing(0.1)}em;

    a {
      text-decoration: none;
      margin-right: ${isRTL ? `unset` : `${theme.spacing(0.1)}em`};
      margin-left: ${isRTL ? `${theme.spacing(0.1)}em` : `unset`};

      &, &:visited {
        color: inherit;
      }
    }

    @media only screen and (max-width: 28em) {
      grid-template-columns: 1fr;
    }
	`;
});

const ContactMe: React.FunctionComponent = () => {

	return (
		<PageContainer
			id={`contact-me`}
			Icon={PermContactCalendarOutlined}
			text={`Contact Me`}
		>
			<StyledBox>
				<StyledLinksContainer>
					<IconLink
						translate={false}
						to={`tel:+972052-6256647`}
						Icon={CallOutlined}
						alt={`phone-number`}
						text={`052-6256647`}
					/>
					<IconLink
						translate={false}
						to={`mailto:omri.levy0197@gmail.com`}
						Icon={AlternateEmailOutlined}
						alt={`email-address`}
						text={`omri.levy0197@gmail.com`}
					/>
					<ExternalLinksContainer />
				</StyledLinksContainer>
				<ContactMeForm />
			</StyledBox>
		</PageContainer>
	);
};

export default ContactMe;
