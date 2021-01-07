const generateSeverity = (fetchState: string | undefined): string => {
	switch (fetchState) {
		case `success`:
			return `success`;
		case `error`:
			return `error`;
		case `cooldown`:
		case `robot`:
			return `warning`;
		default:
			return `error`;
	}
};

export default generateSeverity;
