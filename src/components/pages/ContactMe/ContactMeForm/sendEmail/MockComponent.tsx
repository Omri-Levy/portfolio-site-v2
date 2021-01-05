import React, { useState } from 'react';
import sendEmail from './sendEmail';
import { Props } from './types';

const MockComponent: React.FunctionComponent<Props> = ({ toTest }) => {
	let isRobot = false;

	if (toTest === `isRobot`) {
		isRobot = true;
	} else if (toTest === `cooldown`) {
		localStorage.setItem(`ec`, `true`);
	}

	const [fetchState, setFetchState] = useState(undefined);

	return (
		<>
			<button
				// eslint-disable-next-line
				// @ts-ignore
				onClick={sendEmail(setFetchState, isRobot)}
			>
				test submit
			</button>
			{fetchState}
		</>
	);
};

export default MockComponent;
