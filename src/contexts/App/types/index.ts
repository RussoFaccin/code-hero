import { Character } from "shared/types";

export interface Props {
  children: JSX.Element;
}

export interface ContextType {
  data: Character[];
  currPage: number;
  limit: number;
  offset: number;
  actions: {
    setData(data: Character[]): void;
    setCurrPage(page: number): void;
    setOffset(offset: number): void;
  }
}
