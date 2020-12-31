import { Button } from '@material-ui/core';
import React from 'react';
import { ButtonProps } from '~/utils/types';
import { TranslateText } from '../Layout/Locales/TranslateText';
import useStyles from './useStyles';
import clsx from 'clsx';

const ButtonLink: React.FunctionComponent<ButtonProps> = (props) => {
	const { variant, to, text, additionalClass, onClick } = props;
	const classes = useStyles();
	const classNames = clsx([classes.button, additionalClass]);

	return (
		<Button
			color={variant}
			className={classNames}
			variant={variant === `primary` ? `contained` : `outlined`}
			onClick={onClick}
		>
			{to ? (
				<a href={to} target={`_blank`} className={classes.link}>
					<TranslateText text={text} />
				</a>
			) : (
				<TranslateText text={text} />
			)}
		</Button>
	);
};

export default ButtonLink;
