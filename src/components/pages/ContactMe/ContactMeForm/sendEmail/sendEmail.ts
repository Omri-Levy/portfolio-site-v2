import { onCooldown } from '~/components/pages/ContactMe/ContactMeForm/onCooldown';
import { init, send } from 'emailjs-com';
import { Data, SetFetchState } from './types';

const sendEmail = (setFetchState: SetFetchState, isRobot: boolean) => (
	data: Data,
): void => {
	if (isRobot) {
		setFetchState(`robot`);
		return;
	}

	if (onCooldown()) {
		setFetchState(`cooldown`);
		return;
	}

	// initing emailjs
	init(`user_VCUWzf1n5yq07YDWAJoZH`);

	(async () => {
		setFetchState(`loading`);

		const templateParams = {
			fullName: data.fullName,
			email: data.email,
			message: data.message,
		};

		await send(`service_vv503ou`, `template_40335ln`, templateParams).then(
			(response) => {
				if (response.status !== 200) {
					setFetchState(`error`);
				}

				setFetchState(`success`);
				localStorage.setItem(`ec`, `true`);
				setTimeout(() => localStorage.setItem(`ec`, `false`), 300000);
			},
			(err) => {
				if (err) {
					setFetchState(`error`);
				}
			},
		);
	})();
};

export default sendEmail;
