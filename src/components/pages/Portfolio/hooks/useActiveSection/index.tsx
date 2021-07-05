import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const useActiveSection = () => {
	const controls = useAnimation();
	const container = {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.5,
				delayChildren: 0.2,
			},
		},
	};
	const items = {
		hidden: {
			scale: 0,
		},
		show: {
			scale: 1,
		},
	};

	useEffect(() => {
		const listener = async () => {
			const thisSection = document.getElementById(`portfolio`);
			const isActive = thisSection?.classList.contains(`active-section`);

			if (isActive) {
				await controls.start(`show`);
			} else {
				await controls.start(`hidden`);
			}
		};
		(() => listener())();

		document.addEventListener(`scroll`, listener, false);

		return () => {
			document.removeEventListener(`scroll`, listener, false);
		};
	}, []);

	return { controls, container, items };
};

export default useActiveSection;
