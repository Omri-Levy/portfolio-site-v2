import { Button, CircularProgress } from '@material-ui/core';
import React from 'react';
import { ButtonProps } from '~/utils/types';
import { TranslateText } from '../Layout/Locales/TranslateText';
import useStyles from './useStyles';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';

const ButtonLink: React.FunctionComponent<ButtonProps> = (props) => {
	const {
		variant,
		to,
		text,
		additionalClass,
		onClick,
		disabled = false,
		type,
	} = props;
	const classes = useStyles();
	const classNames = clsx([classes.button, additionalClass]);
	const theme = useTheme();
	const styles = disabled ? { borderColor: theme.palette[variant].main } : {};

	return (
		<Button
			type={type ?? type}
			color={variant}
			className={classNames}
			variant={variant === `primary` ? `contained` : `outlined`}
			onClick={onClick}
			disabled={disabled}
			style={styles}
		>
			{to ? (
				<a href={to} target={`_blank`} className={classes.link}>
					{disabled ? (
						<CircularProgress
							className={classes.spinner}
							style={{
								width: `70%`,
								height: `70%`,
							}}
						/>
					) : (
						<TranslateText text={text} />
					)}
				</a>
			) : disabled ? (
				<CircularProgress
					className={classes.spinner}
					style={{
						width: `70%`,
						height: `70%`,
					}}
				/>
			) : (
				<TranslateText text={text} />
			)}
		</Button>
	);
};

export default ButtonLink;
