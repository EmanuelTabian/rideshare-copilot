import { createContext, useContext } from "react";
import styled from "styled-components";

// Styled components
const StyledTable = styled.div`
  border: 1px solid black;
  font-size: 1rem;
  overflow: scroll;
`;

// Compound component originally designed by Jonas Schmedtmann and adapted to current project.
const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable>{children}</StyledTable>
    </TableContext.Provider>
  );
}

export default Table;
