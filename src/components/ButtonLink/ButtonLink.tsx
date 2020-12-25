import { Button } from '@material-ui/core';
import { Link } from 'gatsby';
import React from 'react';
import { ButtonProps } from '../../utils/types';
import { TranslateText } from '../TranslateText';
import useStyles from './useStyles';

const ButtonLink: React.FunctionComponent<ButtonProps> = (props) => {
	const classes = useStyles();

	return (
		<Button
			variant={props.variant === 'primary' ? 'contained' : 'outlined'}
			color={props.variant}
			className={classes.button}
		>
			{props.to ? (
				<Link to={props.to} target={'_blank'} className={classes.link}>
					<TranslateText text={props.text} />
				</Link>
			) : (
				<TranslateText text={props.text} />
			)}
		</Button>
	);
};

export default ButtonLink;
