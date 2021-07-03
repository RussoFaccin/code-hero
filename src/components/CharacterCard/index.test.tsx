import React from "react";
import { act, fireEvent, render, RenderResult } from "@testing-library/react";
import { BrowserRouter as Router, MemoryRouter } from "react-router-dom";
import { Character } from "shared/types";
import CharacterCard from ".";

describe("CharacterCard component", () => {
  let utils: RenderResult;
  const character: Character = {
    id: 1011334,
    name: "3-D Man",
    thumb: "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg",
    series: [
      "Avengers: The Initiative (2007 - 2010)",
      "Deadpool (1997 - 2002)",
      "Marvel Premiere (1972 - 1981)",
    ],
    events: ["Secret Invasion"],
  };

  beforeEach(() => {
    utils = render(
      <Router>
        <CharacterCard character={character} />
      </Router>
    );
  });

  it("Should render the component", () => {
    expect(utils.container).toBeInTheDocument();
  });

  it("Should have character thumb", () => {
    const thumb = utils.getByRole("img") as HTMLImageElement;
    expect(thumb.src).toMatch(new RegExp(character.thumb, "gi"));
  });

  it("Should have character name", () => {
    utils.getByText(character.name);
  });

  it("Should display series list", () => {
    character.series.forEach((serie) => {
      utils.getByText(serie, { exact: false });
    });
  });

  it("Should display events list", () => {
    character.events.forEach((event) => {
      utils.getByText(event, { exact: false });
    });
  });

  it("Should navigate to character details page", () => {
    const link = utils.getByRole("link");

    act(() => {
      fireEvent.click(link);
    });

    expect(window.location.href).toMatch(
      new RegExp(String(character.id), "gi")
    );
  });
});
