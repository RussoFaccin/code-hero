export interface Props {
  qtyItems: number;
  activePage: number;
  onChange(pageNumber: number): void;
}

export interface ButtonProps {
  direction?: "left" | "right";
}
