import React from "react";
import { render, RenderResult } from "@testing-library/react";
import Home from "./";

describe("Home Page", () => {
  let utils: RenderResult;

  beforeEach(() => {
    utils = render(<Home />);
  });

  it("Should render the page", () => {
    expect(utils.container).toBeInTheDocument();
  });

  it("Should have 'header' and 'Footer'", () => {
    // Header
    utils.getByRole("banner");
    // Footer
    utils.getByRole("contentinfo");
  });

  it("Should have 'Busca de personagens' text", () => {
    utils.getByText(/Busca de personagens/gi);
  });

  it("Should have 'Nome do personagem' text", () => {
    utils.getByText(/Nome do personagem/gi);
  });

  it("Should have search input", () => {
    utils.getByPlaceholderText(/Search/i);
  });
});
