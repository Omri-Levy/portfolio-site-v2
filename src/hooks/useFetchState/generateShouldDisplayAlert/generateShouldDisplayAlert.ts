const generateShouldDisplayAlert = (
	fetchState: string | undefined,
): boolean => {
	switch (fetchState) {
		case `success`:
		case `error`:
		case `cooldown`:
		case `robot`:
			return true;
		default:
			return false;
	}
};

export default generateShouldDisplayAlert;
