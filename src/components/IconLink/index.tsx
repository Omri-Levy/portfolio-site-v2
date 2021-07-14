import React from 'react';
import { Props } from './types';
import TranslateText from '../Layout/Locales/TranslateText';
import { StyledIconLink } from './styled/StyledIconLink';

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
