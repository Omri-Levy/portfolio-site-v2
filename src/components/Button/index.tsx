import { Button as MuiButton, CircularProgress } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import { ButtonProps } from '../../utils/types';
import TranslateText from '../Layout/Locales/TranslateText';
import useStyles from './useStyles';

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { variant, text, additionalClass, onClick, disabled, type } = props;
  const { button, spinner } = useStyles();
  const classNames = clsx([button, additionalClass]);
  const theme = useTheme();
  const styles = disabled ? { borderColor: theme.palette[variant].main } :
    {};

  return (
		<MuiButton
			type={type ?? type}
			color={variant}
			className={classNames}
			variant={variant === `primary` ? `contained` : `outlined`}
			onClick={onClick}
			disabled={disabled ?? disabled}
			style={styles}
		>
			{disabled ? (
				<CircularProgress
					className={spinner}
					style={{
						width: `70%`,
						height: `70%`,
					}}
				/>
			) : (
				<TranslateText text={text} />
			)}
		</MuiButton>
	);
};

export default Button;
