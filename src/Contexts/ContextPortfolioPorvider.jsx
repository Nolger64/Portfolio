import { Children, createContext } from "react";
export const contextPortfolio = createContext();

export const ContextPorfolioProvider = ({children}) => {
  return (
    <>
      <contextPortfolio.Provider value={10}>
        {children}
      </contextPortfolio.Provider>
    </>
  );
};

export default ContextPorfolioProvider;
