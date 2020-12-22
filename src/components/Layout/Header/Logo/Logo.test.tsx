import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { renderWithLocales } from "../../../../utils/testUtils";
import Logo from "./Logo";

describe("Logo", () => {
  it("renders", () => {
    renderWithLocales(<Logo />);

    // screen.debug();
  });

  it('contains "Omri Levy Fullstack Dev"', () => {
    const { getByText } = renderWithLocales(<Logo />);

    expect(getByText(/Omri\sLevy/)).toBeInTheDocument();
    expect(getByText(/Fullstack\sDev/)).toBeInTheDocument();
  });
});
