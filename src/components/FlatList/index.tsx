import * as React from "react";
import { Props } from "./types";

const FlatList = ({ data, renderItem, fallBack = null }: Props) => {
  if (!data || !renderItem || data.length === 0) {
    return fallBack;
  }

  const tmpList: JSX.Element[] = data.map(renderItem);
  return <>{tmpList}</>;
};

export default FlatList;
