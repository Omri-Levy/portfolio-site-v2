import { Box } from "@material-ui/core";
import {
	AlternateEmailOutlined,
	CallOutlined,
	PermContactCalendarOutlined,
} from "@material-ui/icons";
import React from "react";
import { ContactMeForm } from "./ContactMeForm";
import useStyles from "./useStyles";
import { IconTextLink } from "../../IconTextLink";
import { PageContainer } from "~/components/Layout/PageContainer";

const ContactMe: React.FunctionComponent = () => {
	const classes = useStyles();

	return (
		<PageContainer
			id={`contact-me`}
			Icon={PermContactCalendarOutlined}
			text={`Contact Me`}
		>
			<Box className={classes.outerBox}>
				<Box className={classes.phoneBox}>
					<IconTextLink
						to={`tel:+972052-6256647`}
						Icon={CallOutlined}
						text={`052-6256647`}
					/>
				</Box>
				<Box className={classes.emailBox}>
					<IconTextLink
						to={`mailto:omri.levy0197@gmail.com`}
						Icon={AlternateEmailOutlined}
						text={`omri.levy0197@gmail.com`}
					/>
				</Box>
			</Box>
			<ContactMeForm />
		</PageContainer>
	);
};

export default ContactMe;
