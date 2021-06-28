import React from 'react';
import { Props } from './types';


const IconLink: React.FunctionComponent<Props> = (props) => {

	const {
		Icon,
		to,
		alt,
		text,
		anchorProps,
	} = props;

	return (
		<a
			href={to}
			target={`_blank`}
			aria-label={alt}
			{...anchorProps}
		>
			<Icon />
			{text}
		</a>
	);
};

export default IconLink;
