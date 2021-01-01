import React from 'react';

interface Props {
	children: React.ReactNode;
	Icon: React.FunctionComponent<{ className: string }>;
	text: string;
	id: string;
	className?: string;
}

export { Props };
