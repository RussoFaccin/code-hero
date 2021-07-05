import React from "react";
import { render, RenderResult } from "@testing-library/react";
import ComicCard from "./";
import { Comic } from "shared/types";

describe("Comic Card Component", () => {
  let utils: RenderResult;
  const comic: Comic = {
    title: "Iron Man Epic Collection: Doom (Trade Paperback)",
    thumb: "http://i.annihil.us/u/prod/marvel/i/mg/c/10/5a612c90dfdb5.jpg",
    url: "http://marvel.com/comics/collection/65941/iron_man_epic_collection_doom_trade_paperback?utm_campaign=apiRef&utm_source=0766a9646d612d7c16c4af8150ef4691",
  };

  beforeEach(() => {
    utils = render(<ComicCard comic={comic} />);
  });

  it("Should render the component", () => {
    expect(utils.container).toBeInTheDocument();
  });

  it("Should have defined link", () => {
    const link = utils.getByRole("link") as HTMLLinkElement;
    expect(link.href).toMatch(comic.url);
  });

  it("Should have thumbnail", () => {
    const thumb = utils.getByRole("img") as HTMLImageElement;
    expect(thumb.src).toMatch(comic.thumb);
  });

  it("Should have title", () => {
    const title = utils.getByRole("heading");
    expect(title.textContent).toMatch(comic.title);
  });
});
