import { Box } from "@material-ui/core";
import React from "react";
import GithubBrand from "../GithubBrand/GithubBrand";
import { LinkedinBrand } from "../LinkedinBrand";
import { IconButtonLink } from "../../../IconButtonLink";

const ContactLinksContainer: React.FunctionComponent = () => (
	<Box>
		<IconButtonLink
			Icon={LinkedinBrand}
			to={`https://www.linkedin.c~/omri-levy-798b901b1/`}
		/>
		<IconButtonLink Icon={GithubBrand} to={`https://github.com/Omri-Levy`} />
	</Box>
);

export default ContactLinksContainer;
