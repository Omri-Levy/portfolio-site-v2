import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { renderWithLocales, screen } from "../../../../utils/testUtils";
import CustomNavLink from "./CustomNavLink";

describe("CustomNavLink", () => {
  it("renders", () => {
    renderWithLocales(
      <CustomNavLink text={"Portfolio"} to={"/home#portfolio"} />
    );

    // screen.debug();
  });

  it('contains "Portfolio" in text', () => {
    const { getByText } = renderWithLocales(
      <CustomNavLink text={"Portfolio"} to={"/home#portfolio"} />
    );

    expect(getByText(/Portfolio/)).toBeInTheDocument();
  });

  it('contains "/home#portfolio" in href', () => {
    renderWithLocales(
      <CustomNavLink text={"Portfolio"} to={"/home#portfolio"} />
    );

    expect(screen.getByText(/Portfolio/).closest("a")).toHaveAttribute(
      "href",
      "/home#portfolio"
    );
  });
});
