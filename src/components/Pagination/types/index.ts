export interface Props {
  qtyItems: number;
  limit: number;
  onChange(pageNumber: number): void;
}

export interface ButtonProps {
  direction?: "left" | "right";
}
