import * as React from "react";
import { useParams } from "react-router-dom";

const Characters = (): JSX.Element => {
  const { id } = useParams<{id: string}>();
  
  return <h1>Characters ID: {id}</h1>;
};

export default Characters;
