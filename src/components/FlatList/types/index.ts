export interface Props {
  data: any[];
  renderItem(item: any, index?: number): JSX.Element;
  fallBack?: JSX.Element | null
}
