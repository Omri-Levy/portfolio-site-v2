import React from "react";
import CustomNavLink from "./CustomNavLink";
import { renderWithProviders, screen } from "~/utils/testUtils";

describe(`CustomNavLink`, () => {
	it(`renders`, () => {
		renderWithProviders(
			<CustomNavLink text={`Portfolio`} to={`/home#portfolio`} />,
		);
	});

	it(`contains 'Portfolio' in text`, () => {
		renderWithProviders(
			<CustomNavLink text={`Portfolio`} to={`/home#portfolio`} />,
		);

		expect(screen.getByText(/portfolio/i)).toBeInTheDocument();
	});

	it(`contains '/home#portfolio' in href`, () => {
		renderWithProviders(
			<CustomNavLink text={`Portfolio`} to={`/home#portfolio`} />,
		);
		const link = screen.getByRole(`link`);

		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute(`href`, `/home#portfolio`);
	});
});
