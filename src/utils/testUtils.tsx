import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { Locales } from "../components/Layout/Locales";

const renderWithLocales = (
  ui: React.ReactElement,
  { locale = "pt", ...renderOptions } = {}
) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return <Locales>{children}</Locales>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { renderWithLocales };
