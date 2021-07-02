const setActiveNavLink = () => {
	const sections = document.querySelectorAll(`section`);
	let scrollY = window.pageYOffset;

	sections.forEach((section) => {
		const sectionHeight = section.offsetHeight;
		const sectionTop = section.offsetTop - 200;
		const sectionId = section.getAttribute(`id`);
		const navLink = document.querySelector(
			`nav li a[href*=${sectionId}]`,
		);

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			navLink?.classList.add(`active`);
		} else {
			navLink?.classList.remove(`active`);
		}
	});
};

export default setActiveNavLink;
