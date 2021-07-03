import React from "react";
import { fireEvent, render, RenderResult } from "@testing-library/react";
import Pagination from "./";

describe("Pagination component", () => {
  let utils: RenderResult;
  const actionChange = jest.fn();

  beforeEach(() => {
    utils = render(
      <Pagination qtyItems={10} limit={3} onChange={actionChange} />
    );
  });
  it("Should render the component", () => {
    expect(utils.container).toBeInTheDocument();
  });

  it("Should have pagination buttons", () => {
    utils.getByRole("button", { name: /1/i });
    utils.getByRole("button", { name: /2/i });
    utils.getByRole("button", { name: /3/i });
    expect(utils.queryByRole("button", { name: /4/i })).not.toBeInTheDocument();
  });

  it("Should have first button active", () => {
    const button = utils.getByRole("button", { name: /1/ });
    expect(button).toHaveClass("--active");
  });

  it("Should change active page on button number click", () => {
    const button = utils.getByRole("button", { name: /2/i });
    fireEvent.click(button);
    expect(button).toHaveClass("--active");
  });

  it("Should change active page on next button click", () => {
    const button = utils.getByRole("button", { name: /next/i });
    const buttonPage = utils.getByRole("button", { name: /2/i });

    fireEvent.click(button);
    expect(buttonPage).toHaveClass("--active");
  });

  it("Should call action on page click", () => {
    const button = utils.getByRole("button", { name: /1/i });
    fireEvent.click(button);
    expect(actionChange).toBeCalledWith(Number(button.textContent));
  });
});
