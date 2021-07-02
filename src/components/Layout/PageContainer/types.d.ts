import React from 'react';

interface Props {
	children: React.ReactNode;
	Icon?: React.FunctionComponent;
	text?: string;
	id: string;
	disableAnimation?: boolean;
	inView?: boolean;
}

export { Props };
