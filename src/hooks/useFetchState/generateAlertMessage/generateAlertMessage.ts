import { Props } from './types';

const generateAlertMessage = ({
	fetchState,
	successMessage,
	errorMessage,
	cooldownMessage,
	robotMessage,
}: Props): string | null => {
	switch (fetchState) {
		case `success`:
			return successMessage || `Message sent successfully!`;
		case `error`:
			return errorMessage || `Something went wrong! Please try again later..`;
		case `cooldown`:
			return (
				cooldownMessage ||
				`Message already sent! Please try again in 5 minutes.`
			);
		case `robot`:
			return robotMessage || `Please verify you are not a robot and try again.`;
		default:
			return null;
	}
};

export default generateAlertMessage;
