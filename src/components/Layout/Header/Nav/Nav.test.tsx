import React from "react";
import { renderWithProviders, screen } from "~/utils/testUtils";
import Nav from "./Nav";

describe(`Nav`, () => {
	it(`renders`, () => {
		renderWithProviders(<Nav />);
	});

	it(`contains links`, () => {
		renderWithProviders(<Nav />);

		const links = screen.getAllByRole(`link`);

		links.forEach((link) => {
			expect(link).toBeInTheDocument();
			expect(link).toHaveAttribute(`href`);
		});
	});
});
