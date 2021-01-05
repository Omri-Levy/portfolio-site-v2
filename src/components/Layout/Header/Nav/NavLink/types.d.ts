import React from 'react';
import { SetState } from '~/utils/types';

interface Props {
	to: string;
	Icon?: React.FunctionComponent<{ className: string }>;
	text: string;
	setIsActiveLink: SetState<string>;
	isActiveLink: string;
}

export { Props };
