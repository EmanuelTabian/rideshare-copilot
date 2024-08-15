import { createContext, useContext } from "react";
import styled from "styled-components";

// Styled components
const StyledTable = styled.div`
  border: 1px solid black;
  font-size: 1rem;
  overflow: scroll;
`;

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2rem;
  align-items: center;
  padding: 1rem 1rem;
  text-transform: uppercase;
  font-weight: 500;
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

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return <StyledHeader columns={columns}>{children}</StyledHeader>;
}

export default Table;
