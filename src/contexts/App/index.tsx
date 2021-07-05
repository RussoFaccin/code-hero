import React, { createContext, useContext, useState } from "react";
import { ContextType, Props } from "./types";
import { Character } from "shared/types";

const AppContext = createContext<ContextType>({} as ContextType);

export const useAppContext = (): ContextType => {
  return useContext(AppContext);
};

/**
 * AppProvider component
 */
const AppProvider = ({ children }: Props): JSX.Element => {
  const [data, setData] = useState<Character[]>([]);
  const [currPage, setCurrPage] = useState(1);
  const [offset, setOffset] = useState(0);

  return (
    <AppContext.Provider
      value={{
        data,
        currPage,
        limit: Number(process.env.REACT_APP_ITEMS_PER_PAGE),
        offset,
        actions: {
          setData,
          setCurrPage,
          setOffset
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
