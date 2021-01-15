import { Container as MuiContainer } from '@material-ui/core';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { Props } from './types';
import useStyles from './useStyles';

const Container: React.FunctionComponent<Props> = ({ children, ...props }) => {
	const classes = useStyles();
	const ref = useRef<HTMLElement | null>(null);

	useEffect(() => {
		gsap.to(ref.current, { duration: 0, css: { visibility: `visible` } });
	}, []);

	return (
		<MuiContainer
			className={classes.mainContainer}
			maxWidth={false}
			ref={(element: HTMLElement) => ref.current = element}
			{...props}
		>
			{children}
		</MuiContainer>
	);
};

export default Container;
