import React from "react";
import { renderWithProviders, screen } from "~/utils/testUtils";
import Logo from "./Logo";

describe(`Logo`, () => {
	it(`renders`, () => {
		renderWithProviders(<Logo />);
	});

	it(`contains 'Omri Levy Fullstack Dev'`, () => {
		renderWithProviders(<Logo />);

		screen.getByRole(`link`, { name: /omri levy fullstack dev/i });
	});

	it(`contains link to home page`, () => {
		renderWithProviders(<Logo />);
		const homePageLink = screen.getByRole(`link`);

		expect(homePageLink).toBeInTheDocument();
		expect(homePageLink).toHaveAttribute(`href`, `/home#portfolio`);
	});
});
