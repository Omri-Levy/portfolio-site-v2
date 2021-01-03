import React from 'react';
import { Props } from './types';
import useStyles from './useStyles';

const IconLink: React.FunctionComponent<Props> = (props) => {
	const classes = useStyles();
	const {
		pt = 0,
		pr = 0,
		pb = 0,
		pl = 0,
		mt = 0,
		mr = 0,
		mb = 0,
		ml = 0,
		iconPt = 0,
		iconPr = 0,
		iconPb = 0,
		iconPl = 0,
		iconMt = 0,
		iconMr = 0,
		iconMb = 0,
		iconMl = 0,
		Icon,
		to,
		alt,
		text,
		textLineHeight = 0,
	} = props;

	return (
		<a
			href={to}
			target={`_blank`}
			aria-label={alt}
			className={classes.link}
			style={{
				padding: `${pt}px ${pr}px ${pb}px ${pl}px`,
				margin: `${mt}px ${mr}px ${mb}px ${ml}px`,
				lineHeight: textLineHeight,
			}}
		>
			<Icon
				className={classes.icon}
				style={{
					padding: `${iconPt}px ${iconPr}px ${iconPb}px ${iconPl}px`,
					margin: `${iconMt}px ${iconMr}px ${iconMb}px ${iconMl}px`,
				}}
			/>
			{text}
		</a>
	);
};

export default IconLink;
