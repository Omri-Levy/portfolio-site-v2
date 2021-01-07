import { SetState } from '~/utils/types';
import { RecaptchaValue } from './types';

const handleRecaptcha = (
	setIsRobot: SetState<boolean>,
	recaptchaValue: RecaptchaValue,
) => (value: string): void => {
	setIsRobot(false);
	recaptchaValue.current = { 'g-recaptcha-response': value };
};

export default handleRecaptcha;
