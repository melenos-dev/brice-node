import { createContext, useState } from "react";
export const SlideContext = createContext();

export const SlideProvider = ({ children }) => {
  const [page, setPage] = useState(1);

  const changePage = (next) => {
    setPage(next);
  };

  return (
    <SlideContext.Provider value={{ page, changePage }}>
      {children}
    </SlideContext.Provider>
  );
};
