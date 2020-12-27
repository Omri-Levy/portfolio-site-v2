import React from "react";
import { renderWithProviders, screen } from "~/utils/testUtils";
import Nav from "./Nav";
import { expect } from "@jest/globals";

describe(`Nav`, () => {
	it(`renders`, () => {
		renderWithProviders(<Nav />);
	});

	it(`contains three links`, () => {
		renderWithProviders(<Nav />);

		const links = screen.getAllByRole(`link`);

		expect(links).toHaveLength(3);
	});
});
