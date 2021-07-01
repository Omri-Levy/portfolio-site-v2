import React from 'react';
import { LinkProps } from '@material-ui/core';

interface Props {
	Icon: React.FunctionComponent;
	text?: string;
	to: string;
	alt: string;
	textLineHeight?: number;
	anchorProps?: LinkProps;
	translate?: boolean;
}

export { Props };
