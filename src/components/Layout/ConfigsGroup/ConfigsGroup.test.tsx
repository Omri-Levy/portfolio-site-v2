import React from "react";
import { renderWithProviders, screen } from "~/utils/testUtils";
import ConfigsGroup from "./ConfigsGroup";

describe(`ConfigsGroup`, () => {
	it(`renders`, () => {
		renderWithProviders(<ConfigsGroup />);
	});

	it(`contains theme selector`, () => {
		renderWithProviders(<ConfigsGroup />);

		expect(screen.getByRole(`theme-selector`)).toBeInTheDocument();
	});

	it(`contains dark mode toggle`, () => {
		renderWithProviders(<ConfigsGroup />);

		expect(screen.getByRole(`dark-mode-toggle`)).toBeInTheDocument();
	});

	it(`contains language menu`, () => {
		renderWithProviders(<ConfigsGroup />);

		expect(screen.getByRole(`language-menu`)).toBeInTheDocument();
	});
});
