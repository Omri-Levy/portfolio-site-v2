import { IconButton } from '@material-ui/core';
import { SettingsOutlined } from '@material-ui/icons';
import gsap from 'gsap';
import React, { useRef } from 'react';
import DarkModeToggle from './DarkModeToggle';
import LanguageMenu from './LanguageMenu';
import ThemeSelector from './ThemeSelector';
import useStyles from './useStyles';

const ConfigsGroup: React.FunctionComponent = () => {
	const { configCog, configContainer } = useStyles();
	const configCogRef = useRef<HTMLElement | null>(null);
	const configContainerRef = useRef<HTMLElement | null>(null);
	const tl = gsap.timeline({ paused: true, reversed: true });

	const handleClick = () => {
		tl.to(configContainerRef.current, {
			scaleX: 1,
			transformOrigin: `left`,
			easing: `elastic.out(1.1, 0.4)`,
		});

		tl.reversed() ? tl.play() : tl.reverse();
	};


	return (
		<>
			<IconButton
				className={configCog}
				ref={(element) => configCogRef.current = element}
				onClick={handleClick}
			>
				<SettingsOutlined />
			</IconButton>
			<div
				className={configContainer}
				ref={(element) => configContainerRef.current = element}
				role={`group`}
			>
				<ThemeSelector />
				<DarkModeToggle />
				<LanguageMenu />
			</div>
		</>
	);
};

export default ConfigsGroup;
