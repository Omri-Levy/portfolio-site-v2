import { IconButton } from "@material-ui/core";
import React from "react";
import { Props } from "./types";
import useStyles from "./useStyles";

const ContactLink: React.FunctionComponent<Props> = ({ Icon, to }) => {
	const classes = useStyles();

	return (
		<IconButton
			className={classes.button}
			style={{ backgroundColor: `transparent` }}
			disableFocusRipple
		>
			<a href={to} target={`_blank`}>
				<Icon className={classes.icon} />
			</a>
		</IconButton>
	);
};

export default ContactLink;
