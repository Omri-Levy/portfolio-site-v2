import React from 'react';
import { Props } from './types';
import styled, { css } from 'styled-components';
import { Link } from '@material-ui/core';
import TranslateText from '../Layout/Locales/TranslateText';
import useThemeContext from '../../context/ThemeProvider/useThemeContext';

const StyledIconLink = styled(Link)(({ theme }) => {
	const { isRTL } = useThemeContext();

	return css`
    display: flex;
    align-items: center;

    svg {
      margin-right: ${isRTL ? 0 : theme.spacing(0.03)}em;
      margin-left: ${isRTL ? theme.spacing(0.03) : 0}em;
    }
	`;
});
const IconLink: React.FunctionComponent<Props> = ({
																										Icon,
																										to,
																										alt,
																										text,
																										translate = true,
																										anchorProps,
																									}) => {

	return (
		<StyledIconLink
			href={to}
			target={`_blank`}
			rel='noopener'
			aria-label={alt}
			{...anchorProps}
		>
			<Icon />
			{translate && <TranslateText text={text || ``} />}
			{!translate && text}
		</StyledIconLink>
	);
};

export default IconLink;
