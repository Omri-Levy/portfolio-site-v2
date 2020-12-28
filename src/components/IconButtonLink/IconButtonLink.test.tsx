import React from "react";
import { renderWithProviders, screen } from "~/utils/testUtils";
import IconButtonLink from "./IconButtonLink";
import { Email } from "@material-ui/icons";

describe(`IconButtonLink`, () => {
	it(`renders`, () => {
		renderWithProviders(
			<IconButtonLink Icon={Email} to={`https://www.google.com`} />,
		);
	});

	it(`contains icon`, () => {
		renderWithProviders(
			<IconButtonLink Icon={Email} to={`https://www.google.com`} />,
		);
		const icon = screen.getByRole(`icon`);

		expect(icon).toBeInTheDocument();
	});

	it(`contains link`, () => {
		renderWithProviders(
			<IconButtonLink Icon={Email} to={`https://www.google.com`} />,
		);
		const link = screen.getByRole(`link`);

		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute(`href`, `https://www.google.com`);
	});
});
