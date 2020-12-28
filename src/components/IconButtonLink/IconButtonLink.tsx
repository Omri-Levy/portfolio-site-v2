import { IconButton } from "@material-ui/core";
import React from "react";
import { Props } from "./types";
import useStyles from "./useStyles";

const IconButtonLink: React.FunctionComponent<Props> = ({ Icon, to }) => {
	const classes = useStyles();

	return (
		<a href={to} target={`_blank`} role={`link`}>
			<IconButton
				className={classes.button}
				style={{ backgroundColor: `transparent` }}
				disableFocusRipple
				role={`icon`}
			>
				<Icon className={classes.icon} />
			</IconButton>
		</a>
	);
};

export default IconButtonLink;
