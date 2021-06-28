import React, { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

interface Props {
	Icon: React.FunctionComponent;
	text?: string;
	to: string;
	alt: string;
	textLineHeight?: number;
	anchorProps?: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
}

export { Props };
