import React from "react";
import ButtonLink from "./ButtonLink";
import { renderWithProviders } from "~/utils/testUtils";

describe(`ButtonLink`, () => {
	it(`renders primary`, () => {
		renderWithProviders(
			<ButtonLink variant={`primary`} text={`primary test text`} />,
		);
	});

	it(`renders primary\`s text`, () => {
		const { getByText } = renderWithProviders(
			<ButtonLink variant={`primary`} text={`primary test text`} />,
		);

		expect(getByText(/primary test text/i)).toBeInTheDocument();
	});
});
