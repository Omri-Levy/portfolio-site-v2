import React from "react";
import { render } from "@testing-library/react";
import ConfigsGroup from "./ConfigsGroup";

describe(`ConfigsGroup`, () => {
	it(`renders`, () => {
		render(<ConfigsGroup />);
	});

	it(`contains theme selector`, () => {
		const { getByTestId } = render(<ConfigsGroup />);

		expect(getByTestId(`theme-selector`)).toBeInTheDocument();
	});

	it(`contains dark mode toggle`, () => {
		const { getByTestId } = render(<ConfigsGroup />);

		expect(getByTestId(`dark-mode-toggle`)).toBeInTheDocument();
	});

	it(`contains language menu`, () => {
		const { getByTestId } = render(<ConfigsGroup />);

		expect(getByTestId(`language-menu`)).toBeInTheDocument();
	});
});
