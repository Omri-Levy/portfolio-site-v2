import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import useThemeContext
	from '../../../../../context/ThemeProvider/useThemeContext';

const useActiveSection = () => {
	const controls = useAnimation();
	const { isRTL } = useThemeContext();
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
	const listener = async () => {
		const thisSection = document.getElementById(`portfolio`);
		const isActive = thisSection?.classList.contains(`active-section`);

		if (isActive) {
			await controls.start(`show`);
		} else {
			await controls.start(`hidden`);
		}
	};

	useEffect(() => {
		document.addEventListener(`scroll`, listener, false);

		return () => {
			document.removeEventListener(`scroll`, listener, false);
		};
	}, []);

	useEffect(() => {
		// immediately invoked function due to listener being async
		(() => listener())();
	}, [isRTL]);

	return { controls, container, items };
};

export default useActiveSection;
