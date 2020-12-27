import { Button } from "@material-ui/core";
import React from "react";
import { ButtonProps } from "~/utils/types";
import { TranslateText } from "../TranslateText";
import useStyles from "./useStyles";
import clsx from "clsx";

const ButtonLink: React.FunctionComponent<ButtonProps> = (props) => {
	const classes = useStyles();
	const classNames = clsx([classes.button, props.additionalClass]);

	return (
		<Button
			variant={props.variant === `primary` ? `contained` : `outlined`}
			color={props.variant}
			className={classNames}
		>
			{props.to ? (
				<a href={props.to} target={`_blank`} className={classes.link}>
					<TranslateText text={props.text} />
				</a>
			) : (
				<TranslateText text={props.text} />
			)}
		</Button>
	);
};

export default ButtonLink;
