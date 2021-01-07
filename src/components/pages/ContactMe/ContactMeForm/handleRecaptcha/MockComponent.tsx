import React, { useRef, useState } from 'react';
import handleRecaptcha from './handleRecaptcha';
import { Props } from './types';

const MockIsRobot: React.FunctionComponent<Props> = ({ toTest }) => {
	const [isRobot, setIsRobot] = useState(true);
	const recaptchaValue = useRef({});

	let renderValue;

	if (toTest === `isRobot`) {
		renderValue = JSON.stringify(isRobot);
	} else {
		renderValue = JSON.stringify(recaptchaValue);
	}

	return (
		<input
			type={`checkbox`}
			// eslint-disable-next-line
			// @ts-ignore
			onChange={handleRecaptcha(setIsRobot, recaptchaValue)}
			aria-label={renderValue}
		/>
	);
};

export default MockIsRobot;
