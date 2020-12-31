import React from 'react';

interface Props {
	to: string;
	Icon?: React.FunctionComponent<{ className: string }>;
	text: string;
	setIsActiveLink: React.Dispatch<React.SetStateAction<string>>;
	isActiveLink: string;
}

export { Props };
