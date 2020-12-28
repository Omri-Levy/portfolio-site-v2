import React from "react";
import { renderWithProviders, screen } from "~/utils/testUtils";
import DarkModeToggle from "./DarkModeToggle";

describe(`DarkModeToggle`, () => {
	it(`renders`, () => {
		renderWithProviders(<DarkModeToggle />);
	});

	it(`contains an icon`, () => {
		renderWithProviders(<DarkModeToggle />);
		const darkModeIcon = screen.getByRole(`moon-icon`);

		expect(darkModeIcon).toBeInTheDocument();
	});

	it(`contains a toggle`, () => {
		renderWithProviders(<DarkModeToggle />);
		const darkModeToggle = screen.getByRole(`checkbox`);

		expect(darkModeToggle).toBeInTheDocument();
	});
});
