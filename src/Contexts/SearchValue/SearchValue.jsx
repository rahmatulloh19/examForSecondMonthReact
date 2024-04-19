import { createContext, useState } from "react";

export const SearchValue = createContext();

export const SearchValueProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState([]);

  return (
    <SearchValue.Provider value={{ searchValue, setSearchValue }}>{children}</SearchValue.Provider>
  );
};
