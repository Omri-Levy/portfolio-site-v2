// non-attacker email cooldown
const onCooldown = (): boolean => {
	let cooldown = localStorage.getItem(`ec`);

	if (!cooldown) {
		localStorage.setItem(`ec`, `false`);
		cooldown = `false`;
	}

	return JSON.parse(cooldown);
};

export default onCooldown;
