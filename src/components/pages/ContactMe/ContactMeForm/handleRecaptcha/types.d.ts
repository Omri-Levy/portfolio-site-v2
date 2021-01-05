interface RecaptchaValue {
	current:
		| {
				// eslint-disable-next-line
				'g-recaptcha-response': string;
		  }
		| Record<never, null>;
}

interface Props {
	toTest: string;
}

export { RecaptchaValue, Props };
