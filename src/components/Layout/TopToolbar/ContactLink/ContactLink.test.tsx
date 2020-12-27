import React from "react";
import { render } from "@testing-library/react";
import ContactLink from "./ContactLink";
import { Email } from "@material-ui/icons";

describe(`ContactLink`, () => {
	it(`renders`, () => {
		render(<ContactLink Icon={Email} to={`https://www.google.com`} />);
	});

	it(`contains icon`, () => {
		const { container } = render(
			<ContactLink Icon={Email} to={`https://www.google.com`} />,
		);
		const icon = container.querySelector(`.MuiSvgIcon-root`);

		expect(icon).toBeInTheDocument();
	});

	it(`contains link`, () => {
		const { container } = render(
			<ContactLink Icon={Email} to={`https://www.google.com`} />,
		);
		const link = container.querySelector(`a`);

		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute(`href`, `https://www.google.com`);
	});
});
