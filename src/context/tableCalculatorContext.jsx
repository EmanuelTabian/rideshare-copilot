import { createContext } from "react";

const TableCalculatorContext = createContext();

function tableCalculatorProvider({ children }) {
  return (
    <TableCalculatorContext.Provider value={{}}>
      {children}
    </TableCalculatorContext.Provider>
  );
}
