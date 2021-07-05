import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AppProvider } from "contexts";
import Header from "./";

describe("Header components", () => {
  let utils: RenderResult;

  beforeEach(() => {
    utils = render(
      <AppProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </AppProvider>
    );
  });

  it("Should render the component", () => {
    expect(utils.container).toBeInTheDocument();
  });

  it("Should have brand heading text", () => {
    const mainHeading = "Objective";
    const secondaryHeading = "Desenvolvimento ágil de software e consultoria";

    utils.getByRole("heading", { name: mainHeading });
    utils.getByRole("heading", { name: secondaryHeading });
  });

  it("Should have 'Rodrigo Russo' and 'Teste de Front-end' texts", () => {
    utils.getByText(/Rodrigo Russo/gi);
    utils.getByText(/Teste de Front-end/gi);
  });

  it("Should have a button whith CB text", () => {
    utils.getByRole("button", { name: /CB/i });
  });
});
